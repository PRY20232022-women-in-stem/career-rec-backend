import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Student } from '../../student/entities/student.entity';

@Entity('post_test')
export class PostTest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    projectParticipation: string;

    @Column({ nullable: false })
    projectTimeSpent: string;

    @Column({ nullable: false })
    interestStemFields: number;

    @Column({ nullable: false })
    futureInterestStem: number;

    @Column({ nullable: false })
    learnNewInfo: number;

    @Column({ nullable: false })
    perceptionWomenStem: number;

    @Column({ nullable: false })
    activitySatisfaction: number;

    @Column({ nullable: false })
    projectValue: string;

    @Column({ nullable: false })
    projectImprovement: string;

    @OneToOne(() => Student, (student) => student.postTest)
    @JoinColumn()
    student: Student;
}