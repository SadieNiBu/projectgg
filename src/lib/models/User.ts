import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
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

const User = models.User || model("User", userSchema, "users");
export default User;
