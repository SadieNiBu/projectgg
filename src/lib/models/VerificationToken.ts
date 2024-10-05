import { Model, Schema, model, models } from "mongoose";

export type VerificationToken = {
  identifier: string;
  token: string;
  expires: Date;
};

const verificationTokenSchema = new Schema({
  identifier: String,
  token: String,
  expires: Date,
});

const VerificationToken =
  (models.VerificationToken as Model<VerificationToken>) ||
  model<VerificationToken>(
    "VerificationToken",
    verificationTokenSchema,
    "verificationTokens",
  );
export default VerificationToken;
