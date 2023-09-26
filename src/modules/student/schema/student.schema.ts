import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ versionKey: false, collection: 'Student' })
export class Student extends Document {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ default: '' })
  recCareer: string;

  @Prop({ default: false })
  preTestCompl: boolean;

  @Prop({ default: false })
  postTestCompl: boolean;
}

export const StudentSchema = SchemaFactory.createForClass(Student);