import { BadRequestException } from '@nestjs/common';

export class StudentAlreadyExists extends BadRequestException {
    constructor(message: string) {
        super(message);
    }
}