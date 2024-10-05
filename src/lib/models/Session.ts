import { Schema, model, models } from "mongoose";

const sessionSchema = new Schema({
  id: String,
  expires: Date,
  sessionToken: String,
  userId: String,
});

const Session = models.Session || model("Session", sessionSchema);
export default Session;
