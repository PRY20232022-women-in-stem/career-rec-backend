import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './schemas/student.schema';
import { Student as StudentInterface } from './interfaces/student.interface';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentPasswordDto } from './dto/update-student-password.dto';
import { PasswordUpdateFailedException } from '../../exceptions/password-update-failed.exception.ts';
import { StudentAlreadyExists } from '../../exceptions/student-already-exists.exception';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StudentService {
    constructor(@InjectModel('Student') private readonly studentModel: Model<Student>) { }

    async createStudent(createStudentDto: CreateStudentDto): Promise<StudentInterface> {
        const student = await this.studentModel.findOne({ email: createStudentDto.email });
        if (student) {
            throw new StudentAlreadyExists(`Student already exists`);
        }
        const { password, ...restOfData } = createStudentDto;
        const saltRounds = 10;

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const studentDataWithHashedPassword = { ...restOfData, password: hashedPassword };

        const createStudent = new this.studentModel(studentDataWithHashedPassword);
        return await createStudent.save();
    }

    async findStudentById(studentId: string): Promise<StudentInterface | null> {
        const student = await this.studentModel.findById(studentId);
        if (!student) {
            throw new NotFoundException(`Student with Id ${studentId} not found`);
        }
        return student;
    }

    async findStudentByEmail(email: string): Promise<StudentInterface | null> {
        const student = await this.studentModel.findOne({ email });
        if (!student) {
            throw new NotFoundException(`Student with email ${email} not found`);
        }
        return student;
    }

    async updateStudent(studentId: string, updateData: CreateStudentDto): Promise<StudentInterface | null> {
        const updatedStudent = await this.studentModel.findByIdAndUpdate(studentId, updateData, { new: true });
        if (!updatedStudent) {
            throw new NotFoundException(`Student with Id ${studentId} not found`);
        }
        return updatedStudent;
    }

    async updateStudentPassword(email: string, updatePasswordData: UpdateStudentPasswordDto): Promise<StudentInterface | null> {
        const student = await this.studentModel.findOne({ email });
        if (!student) {
            throw new NotFoundException(`Student with email ${email} not found`);
        }
        const updatedStudent = await this.studentModel.findByIdAndUpdate(student._id, { password: updatePasswordData.password }, { new: true });
        if (!updatedStudent) {
            throw new PasswordUpdateFailedException('Failed updating student password');
        }
        return updatedStudent;
    }

    async updateStudentPreTest(studentId: string): Promise<StudentInterface> {
        const student = await this.studentModel.findById(studentId);
        if (!student) {
            throw new NotFoundException(`Student with Id ${studentId} not found`);
        }

        const updatedStudent = await this.studentModel.findByIdAndUpdate(student._id, { preTestCompl: true }, { new: true });
        if (!updatedStudent) {
            throw new BadRequestException('Failed updating pre-test completition status');
        }
        return updatedStudent;
    }

    async updateStudentPostTest(studentId: string): Promise<StudentInterface> {
        const student = await this.studentModel.findById(studentId);
        if (!student) {
            throw new NotFoundException(`Student with Id ${studentId} not found`);
        }

        const updatedStudent = await this.studentModel.findByIdAndUpdate(student._id, { postTestCompl: true }, { new: true });
        if (!updatedStudent) {
            throw new BadRequestException('Failed updating post-test completition status');
        }
        return updatedStudent;
    }

    async resetPasswordRequest(email: string): Promise<void> {
        // Logica para el reinicio de contrasenia con JWT 
    }

    async deleteStudent(studentId: string): Promise<StudentInterface | null> {
        const deletedStudent = await this.studentModel.findByIdAndRemove(studentId);
        if (!deletedStudent) {
            throw new NotFoundException(`Student with Id ${studentId} not found`);
        }
        return deletedStudent;
    }
}