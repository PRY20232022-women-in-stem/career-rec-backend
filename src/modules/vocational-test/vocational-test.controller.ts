import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { VocationalTestService } from './vocational-test.service';
import { CreateVocationalTestDto } from './dto/vocational-test.dto';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('Vocational Test')
@Controller('vocational-test')
export class VocationalTestController {
    constructor(private readonly vocationalTestService: VocationalTestService) { }

    @ApiOperation({ summary: 'Submit new Vocational test' })
    @ApiBody({ type: CreateVocationalTestDto })
    @ApiResponse({ status: 201, description: 'Vocational test processed succesfully' })
    @Post('predict')
    async analyzeVocationalTest(@Body() createVocationalTestDto: CreateVocationalTestDto) {
        return this.vocationalTestService.analyzeVocationalTest(createVocationalTestDto);
    }
}
