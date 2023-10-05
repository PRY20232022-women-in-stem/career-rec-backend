import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Student } from '../../student/entities/student.entity';

@Entity('pre_test')
export class PreTest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    freeTimeActivities: boolean;

    @Column({ nullable: false })
    subjectInterestMath: number;

    @Column({ nullable: false })
    subjectInterestBioGeo: number;

    @Column({ nullable: false })
    subjectInterestPhyChe: number;

    @Column({ nullable: false })
    selfPerceptionMath: number;

    @Column({ nullable: false })
    selfPerceptionBioGeo: number;

    @Column({ nullable: false })
    selfPerceptionPhyChe: number;

    @Column({ nullable: false })
    lastGradeMath: string;

    @Column({ nullable: false })
    lastGradeBioGeo: string;

    @Column({ nullable: false })
    lastGradePhyChe: string;

    @OneToOne(() => Student, (student) => student.preTest)
    @JoinColumn()
    student: Student;
}