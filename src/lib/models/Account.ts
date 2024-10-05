import { Schema, model, models, Model } from "mongoose";

export type Account = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string;
  access_token: string;
  expires_at: number;
  token_type: string;
  scope: string;
  id_token: string;
  session_state: string;
};

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
