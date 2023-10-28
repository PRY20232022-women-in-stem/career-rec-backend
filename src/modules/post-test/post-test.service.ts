import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostTest } from './entities/post-test.entity';
import { PostTest as PostTestInterface } from './interfaces/post-test.interface';
import { CreatePostTestDto } from './dto/create-post-test.dto';
import { Student } from '../student/entities/student.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class PostTestService {
    constructor(
        @InjectRepository(PostTest) private postTestRepository: Repository<PostTest>,
        @InjectRepository(Student) private studentRepository: Repository<Student>
    ) { }

    async createPostTest(studentId: number, createPostTestDto: CreatePostTestDto): Promise<PostTestInterface> {
        const student = await this.studentRepository.findOneBy({ id: studentId });
        if (!student) {
            throw new NotFoundException(`Student with ID ${studentId} not found`);
        }

        // VERIFICAR SI YA HAY UN REGISTRO EXISTENTE
        const postTest = await this.postTestRepository.findOne({
            where: { student: { id: studentId }, isSecond: "yes" },
            relations: ["student"]
        });
        if (postTest) {
            if (postTest.isSecond === 'yes') {
                // Si ya ha completado un segundo registro, no se le permite enviar más.
                throw new BadRequestException(`Second post-test already submitted by user`);
            } else {
                // Si es segundo, se marca como "is_second" = 'yes' y se guarda.
                const newPostTest = plainToClass(PostTest, createPostTestDto);
                newPostTest.isSecond = 'yes';
                newPostTest.student = student;

                const createPostTest = await this.postTestRepository.save(newPostTest);
                return createPostTest;
            }
        }

        const newPostTest = plainToClass(PostTest, createPostTestDto);
        newPostTest.student = student;

        const createPostTest = await this.postTestRepository.save(newPostTest);
        return createPostTest;
    }

    async findAllPostTest(): Promise<PostTestInterface[]> {
        const postTestList = await this.postTestRepository.find();
        return postTestList;
    }

    async findPostTestByStudentId(studentId: number): Promise<PostTestInterface | null> {
        const postTest = await this.postTestRepository.findOne({
            where: { student: { id: studentId } },
            relations: ["student"]
        });
        if (!postTest) {
            throw new NotFoundException(`Student Pre-test does not exists`);
        }
        return postTest;
    }
}
