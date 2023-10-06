import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Max, Min } from 'class-validator';

export class CreateVocationalTestDto {
    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly mathLogicAbility: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly mathDifficulty: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly mathInterest: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly mathChallenges: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly mathExamCommitment: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly mathPerformance: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly mathParticipation: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly mathRealWorldApplication: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly mathCareerFuture: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly mathCareerImportance: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly scienceInterest: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly scienceCareerPossibility: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly scienceParticipation: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly scienceDislike: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly scienceCareerBenefits: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly scienceAcademicPerformance: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly scienceDifficulty: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly scienceRealWorldApplication: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly scienceCareerImportance: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly scienceActivitiesParticipation: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly techBuildingRepairAbility: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly techStudiesChoice: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly techDevicesSkills: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly techSuccessConfidence: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly techInventionsLink: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly techProjectsApplicability: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly techCuriosity: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly techCareerRelevance: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly techCoursesInterest: number;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly techProblemSolvingSkills: number;
}
