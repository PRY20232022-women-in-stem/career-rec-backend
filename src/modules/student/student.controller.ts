import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
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
    async getStudentById(@Param('studentId') studentId: string): Promise<StudentInterface> {
        return this.studentService.findStudentById(studentId);
    }

    @ApiOperation({ summary: 'Get Student by Email' })
    @ApiResponse({ status: 200, description: 'Student found', type: StudentDto })
    @ApiResponse({ status: 404, description: 'Student not found' })
    @Get('email/:email')
    async getStudentByEmail(@Param('email') email: string): Promise<StudentInterface> {
        return this.studentService.findStudentByEmail(email);
    }

    // CAMBIAR TODO EL METODO (NO SE USARA)
    @ApiOperation({ summary: 'Update Student by Id' })
    @ApiBody({ type: CreateStudentDto }) // ESTO ESTA MAl
    @ApiResponse({ status: 200, description: 'Student updated successfully', type: StudentDto })
    @ApiResponse({ status: 404, description: 'Student not found' })
    @Put(':studentId')
    async updateStudent(@Param('studentId') studentId: string, @Body() updateData: CreateStudentDto): Promise<StudentInterface> {
        return this.studentService.updateStudent(studentId, updateData);
    }

    @ApiOperation({ summary: 'Update Student\'s Password' })
    @ApiBody({ type: UpdateStudentPasswordDto })
    @ApiResponse({ status: 200, description: 'Password updated successfully', type: StudentDto })
    @ApiResponse({ status: 404, description: 'Student not found' })
    @Put('password')
    async updateStudentPassword(@Body() updatePasswordData: UpdateStudentPasswordDto): Promise<StudentInterface> {
        return this.studentService.updateStudentPassword(updatePasswordData);
    }

    @ApiOperation({ summary: 'Delete Student by Id' })
    @ApiResponse({ status: 200, description: 'Student deleted successfully' })
    @ApiResponse({ status: 404, description: 'Student not found' })
    @Delete(':studentId')
    async deleteStudent(@Param('studentId') studentId: string): Promise<StudentInterface> {
        return this.studentService.deleteStudent(studentId);
    }
}
