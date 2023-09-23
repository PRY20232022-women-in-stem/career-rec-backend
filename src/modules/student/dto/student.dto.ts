import { ApiProperty } from "@nestjs/swagger";

export class StudentDto {
    @ApiProperty()
    readonly firstName: string;
    @ApiProperty()
    readonly lastName: string;
    @ApiProperty()
    readonly email: string;
}