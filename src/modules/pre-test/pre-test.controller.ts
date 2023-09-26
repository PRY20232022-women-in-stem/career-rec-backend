import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/guards/auth.guard';
import { PreTestService } from './pre-test.service';
import { PreTest as PreTestInterface } from './interfaces/pre-test.interface';
import { CreatePreTestDto } from './dto/create-pre-test.dto';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('Pre-Test')
@Controller('pre-test')
export class PreTestController {
    constructor(private readonly preTestService: PreTestService) { }

    @ApiOperation({ summary: 'Create new pre-test' })
    @ApiBody({ type: CreatePreTestDto })
    @ApiResponse({ status: 201, description: 'Pre-test created succesfully' })
    @Post()
    async createPreTest(@Body() createPreTestDto: CreatePreTestDto): Promise<PreTestInterface> {
        return this.preTestService.createPreTest(createPreTestDto);
    }

    @ApiOperation({ summary: 'Get all submitted pre-tests' })
    @ApiResponse({ status: 200, description: 'Returned all student pre-test', type: [CreatePreTestDto] })
    @Get()
    async findAllPreTest(): Promise<PreTestInterface[]> {
        return this.preTestService.findAllPreTest();
    }

    @ApiOperation({ summary: 'Get Pre-test by student Id' })
    @ApiResponse({ status: 200, description: 'Student pre-test found', type: CreatePreTestDto })
    @ApiResponse({ status: 404, description: 'Student pre-test does not exists' })
    @Get('student/:studentId')
    async findPreTestByStudentId(@Param('studentId') studentId: string): Promise<PreTestInterface | null> {
        return this.preTestService.findPreTestByStudentId(studentId);
    }
}
