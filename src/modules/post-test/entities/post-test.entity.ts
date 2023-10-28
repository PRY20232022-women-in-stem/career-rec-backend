import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
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

    @OneToOne(() => Student, (student) => student.postTest)
    @JoinColumn()
    student: Student;
}