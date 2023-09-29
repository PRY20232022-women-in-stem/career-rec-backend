import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateVocationalTestDto } from './dto/vocational-test.dto';

@Injectable()
export class VocationalTestService {
    constructor() { }

    async analyzeVocationalTest(createVocationalTestDto: CreateVocationalTestDto): Promise<any> { // Verificar que recibe para poner la resupuesta del promise
        try {
            const response = await axios.post(`${process.env.FLASK_BACKEND_URL}/predict`, createVocationalTestDto); // CAMBIAR POR LA RUTA DEL BACKEND CON VARIABLE DE ENTORNO
            const result = response.data;
            return result;
        } catch (error) {
            throw new BadRequestException('External service error');
        }
    }
}
