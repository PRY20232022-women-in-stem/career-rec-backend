import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Student } from '../../student/entities/student.entity';

@Entity('post_test')
export class PostTest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    interestStemFields: number;

    @Column({ nullable: false })
    futureInterestStem: number;

    @Column({ nullable: false })
    perceptionWomenStem: number;

    @Column({ default: "" })
    isSecond: string;

    @ManyToOne(() => Student, (student) => student.postTests)
    student: Student;
}