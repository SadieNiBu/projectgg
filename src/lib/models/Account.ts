import { Schema, model, models } from "mongoose";

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

const Account = models.Account || model("Account", accountSchema);
export default Account;
