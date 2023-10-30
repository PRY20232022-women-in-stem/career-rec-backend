import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { PreTest } from './entities/pre-test.entity';
import { PreTest as PreTestInterface } from './interfaces/pre-test.interface';
import { CreatePreTestDto } from './dto/create-pre-test.dto';
import { Student } from '../student/entities/student.entity';
import { PreTestGateway } from './pre-test.gateway';

@Injectable()
export class PreTestService {
    constructor(
        @InjectRepository(PreTest) private preTestRepository: Repository<PreTest>,
        @InjectRepository(Student) private studentRepository: Repository<Student>,
        private readonly preTestGateway: PreTestGateway
    ) { }

    private timeRemaining = 240000; // 240000 4 minutos en milisegundos
    private studentAnswers: { [studentId: number]: number } = {}; // Usamos un objeto para rastrear el ID del estudiante y su grupo
    private timerStarted = false;

    startTimer() {
        console.log("Inició la cuenta atrás para completar el pre-test")
        setTimeout(() => {
            console.log("Cerró la cuenta atrás del pre-test")
            this.classifyAndDivideStudentsAfterTimer();
        }, this.timeRemaining);
    }

    addStudentAnswers(studentId: number, answers: CreatePreTestDto) {
        const classification = this.calculateStudentClassification(answers);
        this.studentAnswers[studentId] = classification; // Almacenamos la clasificación por intervalo para el estudiante
    }

    calculateStudentClassification(answers: CreatePreTestDto): number {
        // Calcula el promedio de las respuestas del estudiante
        const average = (answers.subjectInterestMath + answers.subjectInterestSci + answers.subjectInterestTech +
            answers.selfPerceptionMath + answers.selfPerceptionSci + answers.selfPerceptionTech) / 6;

        // Clasifica al estudiante en uno de los 4 intervalos
        if (average >= 1 && average < 2.5) {
            return 1;
        } else if (average >= 2.5 && average < 3.5) {
            return 2;
        } else if (average >= 3.5 && average < 4.5) {
            return 3;
        } else {
            return 4;
        }
    }

    async classifyAndDivideStudentsAfterTimer() {
        // Obtener una lista de intervalos (1-4)
        const intervals = [1, 2, 3, 4];

        for (const interval of intervals) {
            const intervalStudents = this.getStudentsInInterval(interval); // Obtener estudiantes dentro del intervalo
            const { G1, G2 } = this.divideStudentsEqually(intervalStudents); // Dividir estudiantes en G1 y G2

            // Almacenar la división en la base de datos para el intervalo actual
            await this.storeDivisionInDatabase(G1, G2, interval);

            // Enviar notificaciones en tiempo real a los clientes
            this.notifyClients(G1, G2);
        }
    }

    getStudentsInInterval(interval: number): number[] {
        // Filtrar estudiantes en función de su clasificación por intervalo
        return Object.entries(this.studentAnswers)
            .filter(([_, classification]) => classification === interval)
            .map(([studentId, _]) => Number(studentId));
    }

    divideStudentsEqually(students: number[]): { G1: number[], G2: number[] } {
        // Implementa la lógica de división equitativa aquí y devuelve los grupos G1 y G2
        const groupSize = Math.ceil(students.length / 2);
        const G1 = students.slice(0, groupSize);
        const G2 = students.slice(groupSize);

        // Verifica si la diferencia entre el tamaño de G1 y G2 es mayor que 1
        if (Math.abs(G1.length - G2.length) > 1) {
            // La diferencia es mayor que 1, necesitamos equilibrar los grupos
            while (Math.abs(G1.length - G2.length) > 1) {
                if (G1.length > G2.length) {
                    // Transfiere un estudiante de G1 a G2
                    const studentToMove = G1.pop();
                    G2.unshift(studentToMove);
                } else {
                    // Transfiere un estudiante de G2 a G1
                    const studentToMove = G2.pop();
                    G1.unshift(studentToMove);
                }
            }
        }
        return { G1, G2 };
    }

    async storeDivisionInDatabase(G1: number[], G2: number[], interval: number) {
        for (const studentId of G1) {
            const student = await this.studentRepository.findOneBy({ id: studentId });
            if (student) {
                student.group = 'G1';
                await this.studentRepository.save(student);
            }
        }

        for (const studentId of G2) {
            const student = await this.studentRepository.findOneBy({ id: studentId });
            if (student) {
                student.group = 'G2';
                await this.studentRepository.save(student);
            }
        }
    }

    notifyClient(userId: string, message: string) {
        this.preTestGateway.notifyClient(userId, message);
    }

    private notifyClients(G1: number[], G2: number[]) {
        // Envía notificaciones a los clientes con los IDs de los estudiantes en G1 y G2
        for (const studentId of G1) {
            this.notifyClient(studentId.toString(), "G1");
        }
        for (const studentId of G2) {
            this.notifyClient(studentId.toString(), "G2");
        }
    }

    async createPreTest(studentId: number, createPreTestDto: CreatePreTestDto): Promise<PreTestInterface> {

        if (!this.timerStarted) {
            // Iniciar el temporizador solo la primera vez que se envía un pre-test
            this.startTimer();
            this.timerStarted = true;
        }

        // QUITAR SI ES QUE SE PUEDE ENVIAR VARIAS VECES
        const preTest = await this.preTestRepository.findOne({
            where: { student: { id: studentId } },
            relations: ["student"]
        });
        if (preTest) {
            throw new BadRequestException(`Pre-test already submitted by user`);
        }
        // QUITAR SI ES QUE SE PUEDE ENVIAR VARIAS VECES

        const student = await this.studentRepository.findOneBy({ id: studentId });
        if (!student) {
            throw new NotFoundException(`Student with ID ${studentId} not found`);
        }

        const newPreTest = plainToClass(PreTest, createPreTestDto);
        newPreTest.student = student;

        const createPostTest = await this.preTestRepository.save(newPreTest);
        return createPostTest;
    }

    async findAllPreTest(): Promise<PreTestInterface[]> {
        const preTestList = await this.preTestRepository.find();
        return preTestList;
    }

    async findPreTestByStudentId(studentId: number): Promise<PreTestInterface | null> {
        const preTest = await this.preTestRepository.findOne({
            where: { student: { id: studentId } },
            relations: ["student"]
        });
        if (!preTest) {
            throw new NotFoundException(`Student Pre-test does not exists`);
        }
        return preTest;
    }
}
