import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { StudentService } from '../student/student.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private studentService: StudentService,
        private jwtService: JwtService
    ) { }

    async signIn(loginDto: LoginDto): Promise<any> {
        const student = await this.studentService.findStudentByEmail(loginDto.email);
        const isMatch = await bcrypt.compare(loginDto.password, student.password);
        if (!isMatch) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const payload = { sub: student.id, email: student.email, firstName: student.firstName, lastName: student.lastName };
        const accessToken = await this.jwtService.signAsync(payload);
        return { accessToken };
    }
}
