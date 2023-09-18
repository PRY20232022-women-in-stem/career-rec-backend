import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class MailList extends Document {
  @Prop({ required: true })
  email: string;

  @Prop()
  studentId: number;
}

export const MailListSchema = SchemaFactory.createForClass(MailList);