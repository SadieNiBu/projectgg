import { Model, Schema, model, models } from "mongoose";
import type { Like } from "~/lib/schemas/database";

const likeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  reviewId: { type: Schema.Types.ObjectId, ref: "Review" },
});

const Like =
  (models.Like as Model<Like>) || model<Like>("Like", likeSchema, "likes");
export default Like;
