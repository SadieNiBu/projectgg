import { Schema, model, models } from "mongoose";

const reviewSchema = new Schema({
  id: String,
  createdAt: Date,
  updatedAt: Date,
  content: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  game: {
    type: Schema.Types.ObjectId,
    ref: "Game",
  },
  rating: Number,
});

const Review = models.Review || model("Review", reviewSchema, "reviews");
export default Review;
