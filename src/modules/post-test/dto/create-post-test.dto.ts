import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreatePostTestDto {
    @ApiProperty()
    @IsNumber()
    readonly interestStemFields: number;

    @ApiProperty()
    @IsNumber()
    readonly futureInterestStem: number;

    @ApiProperty()
    @IsNumber()
    readonly perceptionWomenStem: number;
}