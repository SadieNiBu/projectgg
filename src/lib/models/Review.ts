import { Schema, model, models, Model } from "mongoose";
import { User } from "./User";

export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  user: User;
  game: string;
  rating: number;
};

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

const Review =
  (models.Review as Model<Review>) ||
  model<Review>("Review", reviewSchema, "reviews");
export default Review;
