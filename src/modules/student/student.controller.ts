import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student as StudentInterface } from './interfaces/student.interface';
import { UpdateStudentPasswordDto } from './dto/update-student-password.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StudentDto } from './dto/student.dto';
import { AuthGuard } from '../auth/guards/auth.guard';
import { SkipAuth } from '../../decorators/skip-auth.decorator';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('Students')
@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @SkipAuth()
    @ApiOperation({ summary: 'Create new Student' })
    @ApiBody({ type: CreateStudentDto })
    @ApiResponse({ status: 201, description: 'Student created succesfully' })
    @Post()
    async createStudent(@Body() createStudentDto: CreateStudentDto): Promise<StudentInterface> {
        return this.studentService.createStudent(createStudentDto);
    }

    @ApiOperation({ summary: 'Get Student by Id' })
    @ApiResponse({ status: 200, description: 'Student found', type: StudentDto })
    @ApiResponse({ status: 404, description: 'Student not found' })
    @Get(':studentId')
    async getStudentById(@Param('studentId') studentId: number): Promise<StudentInterface> {
        return this.studentService.findStudentById(studentId);
    }

    @ApiOperation({ summary: 'Get Student by Email' })
    @ApiResponse({ status: 200, description: 'Student found', type: StudentDto })
    @ApiResponse({ status: 404, description: 'Student not found' })
    @Get('email/:email')
    async getStudentByEmail(@Param('email') email: string): Promise<StudentInterface> {
        return this.studentService.findStudentByEmail(email);
    }

    @ApiOperation({ summary: 'Update Student Password' })
    @ApiBody({ type: UpdateStudentPasswordDto })
    @ApiResponse({ status: 200, description: 'Password updated successfully', type: StudentDto })
    @ApiResponse({ status: 404, description: 'Student not found' })
    @Patch('password/:email')
    async updateStudentPassword(@Param('email') email: string, @Body() updatePasswordData: UpdateStudentPasswordDto): Promise<StudentInterface> {
        return this.studentService.updateStudentPassword(email, updatePasswordData);
    }

    @ApiOperation({ summary: 'Update student pre-test completition status' })
    @ApiResponse({ status: 200, description: 'Student pre-test completition status updated successfully', type: StudentDto })
    @ApiResponse({ status: 400, description: 'Student pre-test completition status failed' })
    @Patch(':studentId/pre-test')
    async updateStudentPreTest(@Param('studentId') studentId: number): Promise<StudentInterface> {
        return this.studentService.updateStudentPreTest(studentId);
    }

    @ApiOperation({ summary: 'Update student post-test completition status' })
    @ApiResponse({ status: 200, description: 'Student post-test completition status updated successfully', type: StudentDto })
    @ApiResponse({ status: 400, description: 'Student post-test completition status failed' })
    @Patch(':studentId/post-test')
    async updateStudentPostTest(@Param('studentId') studentId: number): Promise<StudentInterface> {
        return this.studentService.updateStudentPostTest(studentId);
    }

    @ApiOperation({ summary: 'Update student vocational-test completition status' })
    @ApiResponse({ status: 200, description: 'Student vocational-test completition status updated successfully', type: StudentDto })
    @ApiResponse({ status: 400, description: 'Student vocational-test completition status failed' })
    @Patch(':studentId/vocational-test')
    async updateStudentVocationalTest(@Param('studentId') studentId: number): Promise<StudentInterface> {
        return this.studentService.updateStudentVocationalTest(studentId);
    }

    // CONSIDERAR SU ELIMINACION, NO SE USA EN EL PROYECTO POR AHORA
    @ApiOperation({ summary: 'Delete Student by Id' })
    @ApiResponse({ status: 200, description: 'Student deleted successfully' })
    @ApiResponse({ status: 404, description: 'Student not found' })
    @Delete(':studentId')
    async deleteStudent(@Param('studentId') studentId: number): Promise<StudentInterface> {
        return this.studentService.deleteStudent(studentId);
    }
}
