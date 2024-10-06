import { Model, Schema, model, models } from "mongoose";
import type { Session } from "~/lib/schemas/database";

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
