import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostTest } from './entities/post-test.entity';
import { PostTest as PostTestInterface } from './interfaces/post-test.interface';
import { CreatePostTestDto } from './dto/create-post-test.dto';

@Injectable()
export class PostTestService {
    constructor(@InjectRepository(PostTest) private postTestRepository: Repository<PostTest>) { }

    async createPostTest(createPostTestDto: CreatePostTestDto): Promise<PostTestInterface> {
        // QUITAR SI ES QUE SE PUEDE ENVIAR VARIAS VECES
        const postTest = await this.postTestRepository.findOne({
            where: { student: { id: createPostTestDto.studentId } },
            relations: ["student"]
        });
        if (postTest) {
            throw new BadRequestException(`Post-test already submitted by user`);
        }
        // QUITAR SI ES QUE SE PUEDE ENVIAR VARIAS VECES
        const createPostTest = await this.postTestRepository.save(createPostTestDto);
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
