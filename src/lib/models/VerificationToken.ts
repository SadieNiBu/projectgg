import { Model, Schema, model, models } from "mongoose";
import type { VerificationToken } from "~/lib/schemas/database";

const verificationTokenSchema = new Schema<VerificationToken>({
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
