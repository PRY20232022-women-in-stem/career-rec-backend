import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePostTestDto {
    @ApiProperty()
    @IsString()
    readonly studentId: string;

    @ApiProperty()
    @IsString()
    readonly projectParticipation: string;

    @ApiProperty()
    @IsString()
    readonly projectTimeSpent: string;

    @ApiProperty()
    @IsNumber()
    readonly interestStemFields: number;

    @ApiProperty()
    @IsNumber()
    readonly futureInterestStem: number;

    @ApiProperty()
    @IsNumber()
    readonly learnNewInfo: number;

    @ApiProperty()
    @IsNumber()
    readonly perceptionWomenStem: number;

    @ApiProperty()
    @IsNumber()
    readonly activitySatisfaction: number;

    @ApiProperty()
    @IsString()
    readonly projectValue: string;

    @ApiProperty()
    @IsString()
    readonly projectImprovement: string;
}