import { Schema, model, models, Model } from "mongoose";
import { type Review } from "~/lib/schemas/database";

const reviewSchema = new Schema({
  id: String,
  createdAt: Date,
  updatedAt: Date,
  content: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  gameId: Number,
  rating: Number,
});

const Review =
  (models.Review as Model<Review>) ||
  model<Review>("Review", reviewSchema, "reviews");
export default Review;
