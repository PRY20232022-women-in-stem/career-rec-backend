import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Student extends Document {
  @Prop({ required: true })
  email: String;

  @Prop({ required: true })
  password: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  recCareer: string;

  @Prop()
  preTestCompl: boolean;

  @Prop()
  postTestCompl: boolean;
}

export const StudentSchema = SchemaFactory.createForClass(Student);