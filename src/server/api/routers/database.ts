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
import Collection from "~/lib/models/Collection";
import Like from "~/lib/models/Like";
import Comment from "~/lib/models/Comment";

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
  createCollection: protectedProcedure
    .input(z.array(z.number()))
    .mutation(async ({ input, ctx }) => {
      const newCollection = new Collection({
        updatedAt: new Date(),
        createdAt: new Date(),
        userId: ctx.session.user.id,
        gameIds: input,
      });
      await newCollection.save();
      return newCollection.toJSON();
    }),
  getCollectionsByUser: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const collections = await Collection.find({ userId: input });
      return collections.map((c) => c.toJSON());
    }),
  deleteCollection: protectedProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      const collection = await Collection.findById(input);
      if (!collection) {
        throw new TRPCError({
          message: "Collection not found",
          code: "NOT_FOUND",
        });
      }
      await collection.deleteOne();
      return collection.toJSON();
    }),
  likeReview: protectedProcedure
    .input(z.string())
    .mutation(async ({ input, ctx }) => {
      const likeExists = await Like.findOne({
        userId: ctx.session.user.id,
        reviewId: input,
      });
      if (likeExists) {
        throw new TRPCError({
          message: "Already liked review",
          code: "FORBIDDEN",
        });
      }
      const like = new Like({
        userId: ctx.session.user.id,
        reviewId: input,
      });
      await like.save();
      return like.toJSON();
    }),
  unlikeReview: protectedProcedure
    .input(z.string())
    .mutation(async ({ input, ctx }) => {
      const like = await Like.findOne({
        userId: ctx.session.user.id,
        reviewId: input,
      });
      if (!like) {
        throw new TRPCError({
          message: "Not liked review",
          code: "FORBIDDEN",
        });
      }
      await like.deleteOne();
      return like.toJSON();
    }),
  commentOnPost: protectedProcedure
    .input(z.object({ reviewId: z.string(), content: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const comment = new Comment({
        userId: ctx.session.user.id,
        reviewId: input.reviewId,
        content: input.content,
      });
      await comment.save();
      return comment.toJSON();
    }),
  updateComment: protectedProcedure
    .input(z.object({ id: z.string(), content: z.string() }))
    .mutation(async ({ input }) => {
      const comment = await Comment.findById(input.id);
      if (!comment) {
        throw new TRPCError({
          message: "Comment not found",
          code: "NOT_FOUND",
        });
      }
      comment.content = input.content;
      await comment.save();
      return comment.toJSON();
    }),
  deleteComment: protectedProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      const comment = await Comment.findById(input);
      if (!comment) {
        throw new TRPCError({
          message: "Comment not found",
          code: "NOT_FOUND",
        });
      }
      await comment.deleteOne();
      return comment.toJSON();
    }),
});
