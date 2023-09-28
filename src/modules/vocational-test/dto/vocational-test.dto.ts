import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateVocationalTestDto {
    @ApiProperty({ description: 'Math Logic Ability' })
    @IsNumber()
    readonly mathLogicAbility: number;

    @ApiProperty({ description: 'Math Difficulty' })
    @IsNumber()
    readonly mathDifficulty: number;

    @ApiProperty({ description: 'Math Interest' })
    @IsNumber()
    readonly mathInterest: number;

    @ApiProperty({ description: 'Math Challenges' })
    @IsNumber()
    readonly mathChallenges: number;

    @ApiProperty({ description: 'Math Exam Commitment' })
    @IsNumber()
    readonly mathExamCommitment: number;

    @ApiProperty({ description: 'Math Performance' })
    @IsNumber()
    readonly mathPerformance: number;

    @ApiProperty({ description: 'Math Participation' })
    @IsNumber()
    readonly mathParticipation: number;

    @ApiProperty({ description: 'Math Real-world Application' })
    @IsNumber()
    readonly mathRealWorldApplication: number;

    @ApiProperty({ description: 'Math Career Future' })
    @IsNumber()
    readonly mathCareerFuture: number;

    @ApiProperty({ description: 'Math Career Importance' })
    @IsNumber()
    readonly mathCareerImportance: number;

    @ApiProperty({ description: 'Science Interest' })
    @IsNumber()
    readonly scienceInterest: number;

    @ApiProperty({ description: 'Science Career Possibility' })
    @IsNumber()
    readonly scienceCareerPossibility: number;

    @ApiProperty({ description: 'Science Participation' })
    @IsNumber()
    readonly scienceParticipation: number;

    @ApiProperty({ description: 'Science Dislike' })
    @IsNumber()
    readonly scienceDislike: number;

    @ApiProperty({ description: 'Science Career Benefits' })
    @IsNumber()
    readonly scienceCareerBenefits: number;

    @ApiProperty({ description: 'Science Academic Performance' })
    @IsNumber()
    readonly scienceAcademicPerformance: number;

    @ApiProperty({ description: 'Science Difficulty' })
    @IsNumber()
    readonly scienceDifficulty: number;

    @ApiProperty({ description: 'Science Real-world Application' })
    @IsNumber()
    readonly scienceRealWorldApplication: number;

    @ApiProperty({ description: 'Science Career Importance' })
    @IsNumber()
    readonly scienceCareerImportance: number;

    @ApiProperty({ description: 'Science Activities Participation' })
    @IsNumber()
    readonly scienceActivitiesParticipation: number;

    @ApiProperty({ description: 'Tech Building Repair Ability' })
    @IsNumber()
    readonly techBuildingRepairAbility: number;

    @ApiProperty({ description: 'Tech Studies Choice' })
    @IsNumber()
    readonly techStudiesChoice: number;

    @ApiProperty({ description: 'Tech Devices Skills' })
    @IsNumber()
    readonly techDevicesSkills: number;

    @ApiProperty({ description: 'Tech Success Confidence' })
    @IsNumber()
    readonly techSuccessConfidence: number;

    @ApiProperty({ description: 'Tech Inventions Link' })
    @IsNumber()
    readonly techInventionsLink: number;

    @ApiProperty({ description: 'Tech Projects Applicability' })
    @IsNumber()
    readonly techProjectsApplicability: number;

    @ApiProperty({ description: 'Tech Curiosity' })
    @IsNumber()
    readonly techCuriosity: number;

    @ApiProperty({ description: 'Tech Career Relevance' })
    @IsNumber()
    readonly techCareerRelevance: number;

    @ApiProperty({ description: 'Tech Courses Interest' })
    @IsNumber()
    readonly techCoursesInterest: number;

    @ApiProperty({ description: 'Tech Problem Solving Skills' })
    @IsNumber()
    readonly techProblemSolvingSkills: number;
}
