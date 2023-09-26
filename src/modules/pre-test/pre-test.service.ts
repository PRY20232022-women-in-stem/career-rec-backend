import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PreTest } from './schemas/pre-test.schema';
import { PreTest as PreTestInterface } from './interfaces/pre-test.interface';
import { CreatePreTestDto } from './dto/create-pre-test.dto';

@Injectable()
export class PreTestService {
    constructor(@InjectModel('PreTest') private readonly preTestModel: Model<PreTest>) { }

    async createPreTest(createPreTestDto: CreatePreTestDto): Promise<PreTestInterface> {
        // QUITAR SI ES QUE SE PUEDE ENVIAR VARIAS VECES
        const preTest = await this.preTestModel.findOne({ studentId: createPreTestDto.studentId });
        if (preTest) {
            throw new BadRequestException(`Pre-test already submitted by user`);
        }
        // QUITAR SI ES QUE SE PUEDE ENVIAR VARIAS VECES
        const createPreTest = new this.preTestModel(createPreTestDto);
        return await createPreTest.save();
    }

    async findAllPreTest(): Promise<PreTestInterface[]> {
        const preTestList = await this.preTestModel.find();
        return preTestList;
    }

    async findPreTestByStudentId(studentId: string): Promise<PreTestInterface | null> {
        const preTest = await this.preTestModel.findOne({ studentId });
        if (!preTest) {
            throw new NotFoundException(`Student Pre-test does not exists`);
        }
        return preTest;
    }
}
