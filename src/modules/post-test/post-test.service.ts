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

        // Contar la cantidad de post-tests existentes para el estudiante
        const postTestCount = await this.postTestRepository.count({
            where: { student: { id: studentId } },
        });

        if (postTestCount >= 2) {
            // Si ya ha completado dos post-tests, no se le permite enviar más.
            throw new BadRequestException(`User has already submitted two post-tests`);
        }

        const newPostTest = this.postTestRepository.create(createPostTestDto);
        newPostTest.student = student;

        if (postTestCount === 0) {
            const createPostTest = await this.postTestRepository.save(newPostTest);
            return createPostTest;
        } else if (postTestCount === 1) {
            newPostTest.isSecond = 'yes';
            const createPostTest = await this.postTestRepository.save(newPostTest);
            return createPostTest;
        }
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
