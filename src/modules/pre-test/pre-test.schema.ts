import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class PreTest extends Document {
  @Prop({ required: true })
  studentId: number;

  @Prop({ required: true })
  freeTimeActivities: boolean;

  @Prop({ required: true })
  subjectInterestMath: number;

  @Prop({ required: true })
  subjectInterestBioGeo: number;

  @Prop({ required: true })
  subjectInterestPhyChe: number;

  @Prop({ required: true })
  selfPerceptionMath: number;

  @Prop({ required: true })
  selfPerceptionBioGeo: number;

  @Prop({ required: true })
  selfPerceptionPhyChe: number;

  @Prop({ required: true })
  lastGradeMath: string;

  @Prop({ required: true })
  lastGradeBioGeo: string;

  @Prop({ required: true })
  lastGradePhyChe: string;
}

export const PreTestSchema = SchemaFactory.createForClass(PreTest);