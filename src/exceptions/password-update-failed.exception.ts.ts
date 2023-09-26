import { BadRequestException } from '@nestjs/common';

export class PasswordUpdateFailedException extends BadRequestException {
    constructor(message: string) {
        super(message);
    }
}