import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PreTest } from './entities/pre-test.entity';
import { PreTest as PreTestInterface } from './interfaces/pre-test.interface';
import { CreatePreTestDto } from './dto/create-pre-test.dto';

@Injectable()
export class PreTestService {
    constructor(@InjectRepository(PreTest) private preTestRepository: Repository<PreTest>) { }

    async createPreTest(createPreTestDto: CreatePreTestDto): Promise<PreTestInterface> {
        // QUITAR SI ES QUE SE PUEDE ENVIAR VARIAS VECES
        const preTest = await this.preTestRepository.findOne({
            where: { student: { id: createPreTestDto.studentId } },
            relations: ["student"]
        });
        if (preTest) {
            throw new BadRequestException(`Pre-test already submitted by user`);
        }
        // QUITAR SI ES QUE SE PUEDE ENVIAR VARIAS VECES
        const createPostTest = await this.preTestRepository.save(createPreTestDto);
        return createPostTest;
    }

    async findAllPreTest(): Promise<PreTestInterface[]> {
        const preTestList = await this.preTestRepository.find();
        return preTestList;
    }

    async findPreTestByStudentId(studentId: number): Promise<PreTestInterface | null> {
        const preTest = await this.preTestRepository.findOne({
            where: { student: { id: studentId } },
            relations: ["student"]
        });
        if (!preTest) {
            throw new NotFoundException(`Student Pre-test does not exists`);
        }
        return preTest;
    }
}
