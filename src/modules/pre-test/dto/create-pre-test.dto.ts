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
    readonly subjectInterestBioGeo: number;

    @ApiProperty()
    @IsNumber()
    readonly subjectInterestPhyChe: number;

    @ApiProperty()
    @IsNumber()
    readonly selfPerceptionMath: number;

    @ApiProperty()
    @IsNumber()
    readonly selfPerceptionBioGeo: number;

    @ApiProperty()
    @IsNumber()
    readonly selfPerceptionPhyChe: number;

    @ApiProperty()
    @IsString()
    readonly lastGradeMath: string;

    @ApiProperty()
    @IsString()
    readonly lastGradeBioGeo: string;

    @ApiProperty()
    @IsString()
    readonly lastGradePhyChe: string;
}