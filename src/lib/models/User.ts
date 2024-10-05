import { Schema, model, models, Model } from "mongoose";
import type { Review, User } from "~/lib/schemas/database";

const userSchema = new Schema<User>({
  id: String,
  name: String,
  email: String,
  emailVerified: Date,
  image: String,
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "reviews",
    },
  ],
  games: [String],
});

const User =
  (models.User as Model<User>) || model<User>("User", userSchema, "users");
export default User;
