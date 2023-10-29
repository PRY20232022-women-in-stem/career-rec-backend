import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VocationalTest } from './entities/vocational-test.entity';
import { Student } from '../student/entities/student.entity';
import { CreateVocationalTestDto } from './dto/vocational-test.dto';

@Injectable()
export class VocationalTestService {
    constructor(
        @InjectRepository(VocationalTest) private vocationalTestRepository: Repository<VocationalTest>,
        @InjectRepository(Student) private studentRepository: Repository<Student>,
    ) { }

    async analyzeVocationalTest(studentId: number, createVocationalTestDto: CreateVocationalTestDto): Promise<any> { // Verificar que recibe para poner la resupuesta del promise
        try {
            const response = await axios.post(`${process.env.FLASK_BACKEND_URL}/predict`, createVocationalTestDto);
            const result = response.data.result;
            this.createVocationalTestAndSaveArea(result, studentId, createVocationalTestDto);
            return result;
        } catch (error) {
            throw new BadRequestException('External service error');
        }
    }

    async createVocationalTestAndSaveArea(predictedArea: string, studentId: number, createVocationalTestDto: CreateVocationalTestDto): Promise<void> {
        const student = await this.studentRepository.findOneBy({ id: studentId });
        if (!student) {
            throw new NotFoundException(`Student with Id ${studentId} not found`);
        }
        const vocationalTest = this.vocationalTestRepository.create(createVocationalTestDto);
        vocationalTest.student = student; // Asigna la relación con el student

        student.recCareer = predictedArea; // Actualiza el area recomendada

        await this.studentRepository.save(student);
        await this.vocationalTestRepository.save(vocationalTest);
    }
}
