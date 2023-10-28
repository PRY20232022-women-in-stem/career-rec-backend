import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class StudentDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly firstName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly lastName: string;

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @ApiProperty()
    @IsString()
    readonly recCareer: string;

    @ApiProperty()
    @IsString()
    readonly group: string;

    @ApiProperty()
    @IsBoolean()
    readonly preTestCompl: boolean;

    @ApiProperty()
    @IsBoolean()
    readonly postTestCompl: boolean;

    @ApiProperty()
    @IsBoolean()
    readonly vocationalTestCompl: boolean;
}