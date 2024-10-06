import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import User from "~/lib/models/User";
import { z } from "zod";
import Review from "~/lib/models/Review";
import { reviewSchema } from "~/lib/schemas/database";
import Follow from "~/lib/models/Follow";
import { TRPCError } from "@trpc/server";

export const databaseRouter = createTRPCRouter({
  getUserById: publicProcedure.input(z.string()).query(async ({ input }) => {
    const user = await User.findById(input);
    if (!user) {
      throw new TRPCError({ message: "User not found", code: "NOT_FOUND" });
    }
    return user.toJSON();
  }),
  getReviewsByUser: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const review = await Review.find({ user: input });
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
        throw new TRPCError({ message: "Review not found", code: "NOT_FOUND" });
      }
      await review.deleteOne();
      return review.toJSON();
    }),
  getUserFollowers: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const followers = await Follow.find({ following: input });
      return followers.map((f) => f.toJSON());
    }),
  getUserFollowing: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const following = await Follow.find({ follower: input });
      return following.map((f) => f.toJSON());
    }),
  followUser: protectedProcedure
    .input(z.string())
    .mutation(async ({ input, ctx }) => {
      const followExists = await Follow.findOne({
        follower: ctx.session.user.id,
        following: input,
      });
      if (followExists) {
        throw new TRPCError({
          message: "Already following user",
          code: "FORBIDDEN",
        });
      }
      const follow = new Follow({
        follower: ctx.session.user.id,
        following: input,
      });
      await follow.save();
      return follow.toJSON();
    }),
  unfollowUser: protectedProcedure
    .input(z.string())
    .mutation(async ({ input, ctx }) => {
      const follow = await Follow.findOne({
        follower: ctx.session.user.id,
        following: input,
      });
      if (!follow) {
        throw new TRPCError({
          message: "Not following user",
          code: "FORBIDDEN",
        });
      }
      await follow.deleteOne();
      return follow.toJSON();
    }),
});
