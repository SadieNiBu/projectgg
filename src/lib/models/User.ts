import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  id: String,
  name: String,
  email: String,
  emailVerified: Date,
  image: String,
});

const User = models.User || model("User", userSchema);
export default User;
