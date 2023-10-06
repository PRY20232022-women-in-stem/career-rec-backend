import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Student } from '../../student/entities/student.entity';

@Entity('vocational_test')
export class VocationalTest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    mathLogicAbility: number;

    @Column({ nullable: false })
    mathDifficulty: number;

    @Column({ nullable: false })
    mathInterest: number;

    @Column({ nullable: false })
    mathChallenges: number;

    @Column({ nullable: false })
    mathExamCommitment: number;

    @Column({ nullable: false })
    mathPerformance: number;

    @Column({ nullable: false })
    mathParticipation: number;

    @Column({ nullable: false })
    mathRealWorldApplication: number;

    @Column({ nullable: false })
    mathCareerFuture: number;

    @Column({ nullable: false })
    mathCareerImportance: number;

    @Column({ nullable: false })
    scienceInterest: number;

    @Column({ nullable: false })
    scienceCareerPossibility: number;

    @Column({ nullable: false })
    scienceParticipation: number;

    @Column({ nullable: false })
    scienceDislike: number;

    @Column({ nullable: false })
    scienceCareerBenefits: number;

    @Column({ nullable: false })
    scienceAcademicPerformance: number;

    @Column({ nullable: false })
    scienceDifficulty: number;

    @Column({ nullable: false })
    scienceRealWorldApplication: number;

    @Column({ nullable: false })
    scienceCareerImportance: number;

    @Column({ nullable: false })
    scienceActivitiesParticipation: number;

    @Column({ nullable: false })
    techBuildingRepairAbility: number;

    @Column({ nullable: false })
    techStudiesChoice: number;

    @Column({ nullable: false })
    techDevicesSkills: number;

    @Column({ nullable: false })
    techSuccessConfidence: number;

    @Column({ nullable: false })
    techInventionsLink: number;

    @Column({ nullable: false })
    techProjectsApplicability: number;

    @Column({ nullable: false })
    techCuriosity: number;

    @Column({ nullable: false })
    techCareerRelevance: number;

    @Column({ nullable: false })
    techCoursesInterest: number;

    @Column({ nullable: false })
    techProblemSolvingSkills: number;

    @ManyToOne(() => Student, (student) => student.vocationalTests)
    student: Student;
}