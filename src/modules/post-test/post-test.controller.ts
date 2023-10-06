import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/guards/auth.guard';
import { PostTestService } from './post-test.service';
import { PostTest as PostTestInterface } from './interfaces/post-test.interface';
import { CreatePostTestDto } from './dto/create-post-test.dto';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('Post-Test')
@Controller('post-test')
export class PostTestController {
    constructor(private readonly postTestService: PostTestService) { }

    @ApiOperation({ summary: 'Create new post-test' })
    @ApiBody({ type: CreatePostTestDto })
    @ApiResponse({ status: 201, description: 'Post-test created succesfully' })
    @Post('student/:studentId')
    async createPostTest(@Param('studentId') studentId: number, @Body() createPostTestDto: CreatePostTestDto): Promise<PostTestInterface> {
        return this.postTestService.createPostTest(studentId, createPostTestDto);
    }

    @ApiOperation({ summary: 'Get all submitted post-tests' })
    @ApiResponse({ status: 200, description: 'Returned all student post-test', type: [CreatePostTestDto] })
    @Get()
    async findAllPostTest(): Promise<PostTestInterface[]> {
        return this.postTestService.findAllPostTest();
    }

    @ApiOperation({ summary: 'Get Post-test by student Id' })
    @ApiResponse({ status: 200, description: 'Student post-test found', type: CreatePostTestDto })
    @ApiResponse({ status: 404, description: 'Student post-test does not exists' })
    @Get('student/:studentId')
    async findPostTestByStudentId(@Param('studentId') studentId: number): Promise<PostTestInterface | null> {
        return this.postTestService.findPostTestByStudentId(studentId);
    }
}
