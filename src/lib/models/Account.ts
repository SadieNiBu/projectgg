import { Schema, model, models, Model } from "mongoose";
import type { Account } from "~/lib/schemas/database";

const accountSchema = new Schema({
  id: String,
  userId: String,
  type: String,
  provider: String,
  providerAccountId: String,
  refresh_token: String,
  access_token: String,
  expires_at: Number,
  token_type: String,
  scope: String,
  id_token: String,
  session_state: String,
});

const Account =
  (models.Account as Model<Account>) ||
  model<Account>("Account", accountSchema, "accounts");
export default Account;
