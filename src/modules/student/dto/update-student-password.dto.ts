import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateStudentPasswordDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;
}