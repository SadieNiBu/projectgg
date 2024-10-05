import { Schema, model, models } from "mongoose";

const verificationTokenSchema = new Schema({
  identifier: String,
  token: String,
  expires: Date,
});

const VerificationToken =
  models.VerificationToken ||
  model("VerificationToken", verificationTokenSchema, "verificationTokens");
export default VerificationToken;
