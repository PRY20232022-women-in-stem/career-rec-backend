import { NotFoundException } from '@nestjs/common';

export class PasswordUpdateFailedException extends NotFoundException {
    constructor(message: string) {
        super(message);
    }
}