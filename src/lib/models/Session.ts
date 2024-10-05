import { Model, Schema, model, models } from "mongoose";

export type Session = {
  id: string;
  expires: Date;
  sessionToken: string;
  userId: string;
};

const sessionSchema = new Schema({
  id: String,
  expires: Date,
  sessionToken: String,
  userId: String,
});

const Session =
  (models.Session as Model<Session>) ||
  model<Session>("Session", sessionSchema, "sessions");
export default Session;
