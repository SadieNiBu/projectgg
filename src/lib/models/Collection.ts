import { Model, model, models, Schema } from "mongoose";
import type { Collection } from "~/lib/schemas/database";

const collectionSchema = new Schema({
  id: String,
  createdAt: Date,
  updatedAt: Date,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  gameIds: [Number],
});

const Collection =
  (models.Collection as Model<Collection>) ||
  model<Collection>("Collection", collectionSchema, "collections");
export default Collection;
