import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostTest } from './schemas/post-test.schema';
import { PostTest as PostTestInterface } from './interfaces/post-test.interface';
import { CreatePostTestDto } from './dto/create-post-test.dto';

@Injectable()
export class PostTestService {
    constructor(@InjectModel('PostTest') private readonly postTestModel: Model<PostTest>) { }

    async createPostTest(createPostTestDto: CreatePostTestDto): Promise<PostTestInterface> {
        // QUITAR SI ES QUE SE PUEDE ENVIAR VARIAS VECES
        const postTest = await this.postTestModel.findOne({ studentId: createPostTestDto.studentId });
        if (postTest) {
            throw new BadRequestException(`Post-test already submitted by user`);
        }
        // QUITAR SI ES QUE SE PUEDE ENVIAR VARIAS VECES
        const createPostTest = new this.postTestModel(createPostTestDto);
        return await createPostTest.save();
    }

    async findAllPostTest(): Promise<PostTestInterface[]> {
        const postTestList = await this.postTestModel.find();
        return postTestList;
    }

    async findPostTestByStudentId(studentId: string): Promise<PostTestInterface | null> {
        const postTest = await this.postTestModel.findOne({ studentId });
        if (!postTest) {
            throw new NotFoundException(`Student Pre-test does not exists`);
        }
        return postTest;
    }
}
