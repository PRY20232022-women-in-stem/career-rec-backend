import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export class PostTest extends Document {
  @Prop({ required: true })
  studentId: string;

  @Prop({ required: true })
  projectParticipation: string;

  @Prop({ required: true })
  projectTimeSpent: number;

  @Prop({ required: true })
  interestStemFields: number;

  @Prop({ required: true })
  futureInterestStem: number;

  @Prop({ required: true })
  learnNewInfo: number;

  @Prop({ required: true })
  perceptionWomenStem: number;

  @Prop({ required: true })
  activitySatisfaction: number;

  @Prop({ required: true })
  projectValue: string;

  @Prop({ required: true })
  projectImprovement: string;
}

export const PostTestSchema = SchemaFactory.createForClass(PostTest);