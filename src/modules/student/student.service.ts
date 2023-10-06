import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { Student as StudentInterface } from './interfaces/student.interface';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentPasswordDto } from './dto/update-student-password.dto';
import { StudentAlreadyExists } from '../../exceptions/student-already-exists.exception';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StudentService {
    constructor(@InjectRepository(Student) private studentRepository: Repository<Student>) { }

    async createStudent(createStudentDto: CreateStudentDto): Promise<StudentInterface> {
        const student = await this.studentRepository.findOneBy({ email: createStudentDto.email });
        if (student) {
            throw new StudentAlreadyExists(`Student already exists`);
        }
        const { password, ...restOfData } = createStudentDto;
        const saltRounds = 10;

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const studentDataWithHashedPassword = { ...restOfData, password: hashedPassword };

        const createStudent = await this.studentRepository.save(studentDataWithHashedPassword);
        return createStudent;
    }

    async findStudentById(studentId: number): Promise<StudentInterface | null> {
        const student = await this.studentRepository.findOneBy({ id: studentId });
        if (!student) {
            throw new NotFoundException(`Student with Id ${studentId} not found`);
        }
        return student;
    }

    async findStudentByEmail(email: string): Promise<StudentInterface | null> {
        const student = await this.studentRepository.findOneBy({ email });
        if (!student) {
            throw new NotFoundException(`Student with email ${email} not found`);
        }
        return student;
    }

    async updateStudentPassword(email: string, updatePasswordData: UpdateStudentPasswordDto): Promise<StudentInterface | null> {
        const student = await this.studentRepository.findOneBy({ email });
        if (!student) {
            throw new NotFoundException(`Student with email ${email} not found`);
        }

        if (updatePasswordData.password) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(updatePasswordData.password, saltRounds);
            student.password = hashedPassword;
        }

        const updatedStudent = await this.studentRepository.save(student);
        return updatedStudent;
    }

    async updateStudentPreTest(studentId: number): Promise<StudentInterface> {
        const student = await this.studentRepository.findOneBy({ id: studentId });
        if (!student) {
            throw new NotFoundException(`Student with Id ${studentId} not found`);
        }
        student.preTestCompl = true;

        const updatedStudent = await this.studentRepository.save(student);
        return updatedStudent;
    }

    async updateStudentPostTest(studentId: number): Promise<StudentInterface> {
        const student = await this.studentRepository.findOneBy({ id: studentId });
        if (!student) {
            throw new NotFoundException(`Student with Id ${studentId} not found`);
        }
        student.postTestCompl = true;

        const updatedStudent = await this.studentRepository.save(student);
        return updatedStudent;
    }

    async resetPasswordRequest(email: string): Promise<void> {
        // Logica para el reinicio de contrasenia con JWT 
    }

    // CONSIDERAR SU ELIMINACION, NO SE USA EN EL PROYECTO POR AHORA
    async deleteStudent(studentId: number): Promise<StudentInterface | null> {
        const student = await this.studentRepository.findOneBy({ id: studentId });
        if (!student) {
            throw new NotFoundException(`Student with Id ${studentId} not found`);
        }

        const deletedStudent = await this.studentRepository.remove(student);
        return deletedStudent;
    }
}