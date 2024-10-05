import { Schema, model, models, Model } from "mongoose";
import { Review } from "./Review";

export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: Date;
  image: string;
  following: User[];
  reviews: Review[];
  games: string[];
};

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
