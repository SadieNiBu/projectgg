import { Model, Schema, model, models } from "mongoose";
import type { Comment } from "~/lib/schemas/database";

const commentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  reviewId: { type: Schema.Types.ObjectId, ref: "Review" },
  content: { type: String, required: true },
});

const Comment =
  (models.Comment as Model<Comment>) ||
  model<Comment>("Comment", commentSchema, "comments");
export default Comment;
