import { Schema, model, models, Model } from "mongoose";
import { User } from "./User";
import { type Review } from "~/lib/schemas/database";

const reviewSchema = new Schema<Review>({
  id: String,
  createdAt: Date,
  updatedAt: Date,
  content: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  game: Number,
  rating: Number,
});

const Review =
  (models.Review as Model<Review>) ||
  model<Review>("Review", reviewSchema, "reviews");
export default Review;
