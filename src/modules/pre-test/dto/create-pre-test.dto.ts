import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreatePreTestDto {
    @ApiProperty()
    @IsBoolean()
    readonly freeTimeActivities: boolean;

    @ApiProperty()
    @IsNumber()
    readonly subjectInterestMath: number;

    @ApiProperty()
    @IsNumber()
    readonly subjectInterestSci: number;

    @ApiProperty()
    @IsNumber()
    readonly subjectInterestTech: number;

    @ApiProperty()
    @IsNumber()
    readonly selfPerceptionMath: number;

    @ApiProperty()
    @IsNumber()
    readonly selfPerceptionSci: number;

    @ApiProperty()
    @IsNumber()
    readonly selfPerceptionTech: number;
}