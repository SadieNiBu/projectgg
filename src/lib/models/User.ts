import { Schema, model, models, Model } from "mongoose";
import type { User } from "~/lib/schemas/database";

const userSchema = new Schema({
  id: String,
  name: String,
  email: String,
  emailVerified: Date,
  image: String,
  gameIds: [String],
  currentlyPlaying: Number,
});

const User =
  (models.User as Model<User>) || model<User>("User", userSchema, "users");
export default User;
