import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateVocationalTestDto {
    @ApiProperty()
    @IsNumber()
    readonly mathLogicAbility: number;

    @ApiProperty()
    @IsNumber()
    readonly mathDifficulty: number;

    @ApiProperty()
    @IsNumber()
    readonly mathInterest: number;

    @ApiProperty()
    @IsNumber()
    readonly mathChallenges: number;

    @ApiProperty()
    @IsNumber()
    readonly mathExamCommitment: number;

    @ApiProperty()
    @IsNumber()
    readonly mathPerformance: number;

    @ApiProperty()
    @IsNumber()
    readonly mathParticipation: number;

    @ApiProperty()
    @IsNumber()
    readonly mathRealWorldApplication: number;

    @ApiProperty()
    @IsNumber()
    readonly mathCareerFuture: number;

    @ApiProperty()
    @IsNumber()
    readonly mathCareerImportance: number;

    @ApiProperty()
    @IsNumber()
    readonly scienceInterest: number;

    @ApiProperty()
    @IsNumber()
    readonly scienceCareerPossibility: number;

    @ApiProperty()
    @IsNumber()
    readonly scienceParticipation: number;

    @ApiProperty()
    @IsNumber()
    readonly scienceDislike: number;

    @ApiProperty()
    @IsNumber()
    readonly scienceCareerBenefits: number;

    @ApiProperty()
    @IsNumber()
    readonly scienceAcademicPerformance: number;

    @ApiProperty()
    @IsNumber()
    readonly scienceDifficulty: number;

    @ApiProperty()
    @IsNumber()
    readonly scienceRealWorldApplication: number;

    @ApiProperty()
    @IsNumber()
    readonly scienceCareerImportance: number;

    @ApiProperty()
    @IsNumber()
    readonly scienceActivitiesParticipation: number;

    @ApiProperty()
    @IsNumber()
    readonly techBuildingRepairAbility: number;

    @ApiProperty()
    @IsNumber()
    readonly techStudiesChoice: number;

    @ApiProperty()
    @IsNumber()
    readonly techDevicesSkills: number;

    @ApiProperty()
    @IsNumber()
    readonly techSuccessConfidence: number;

    @ApiProperty()
    @IsNumber()
    readonly techInventionsLink: number;

    @ApiProperty()
    @IsNumber()
    readonly techProjectsApplicability: number;

    @ApiProperty()
    @IsNumber()
    readonly techCuriosity: number;

    @ApiProperty()
    @IsNumber()
    readonly techCareerRelevance: number;

    @ApiProperty()
    @IsNumber()
    readonly techCoursesInterest: number;

    @ApiProperty()
    @IsNumber()
    readonly techProblemSolvingSkills: number;
}
