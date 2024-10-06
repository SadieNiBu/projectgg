import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import User from "~/lib/models/User";
import { z } from "zod";
import Review from "~/lib/models/Review";
import { reviewSchema } from "~/lib/schemas/database";

export const databaseRouter = createTRPCRouter({
  getUserById: publicProcedure.input(z.string()).query(async ({ input }) => {
    const user = await User.findById(input);
    if (!user) {
      throw new Error("User not found");
    }
    return user.toJSON();
  }),
  getReviewsByUser: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const review = await Review.find({ user: input });
      if (!review) {
        throw new Error("Review not found");
      }
      return review.map((r) => r.toJSON());
    }),
  reviewGame: protectedProcedure
    .input(
      reviewSchema
        .omit({ updatedAt: true, createdAt: true })
        .extend({ id: z.string().optional() }),
    )
    .mutation(async ({ input }) => {
      const review = new Review(input);
      await review.save();
      return review.toJSON();
    }),
  deleteReview: protectedProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      const review = await Review.findById(input);
      if (!review) {
        throw new Error("Review not found");
      }
      await review.deleteOne();
      return review.toJSON();
    }),
});
