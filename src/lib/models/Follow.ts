import { Model, model, models, Schema } from "mongoose";
import type { Follow } from "../schemas/database";

const followSchema = new Schema({
  id: String,
  follower: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  following: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Follow =
  (models.Follow as Model<Follow>) || model("Follow", followSchema, "follows");
export default Follow;
