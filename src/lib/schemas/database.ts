import { z } from "zod";

export const reviewSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  content: z.string(),
  userId: z.string(),
  gameId: z.number(),
  rating: z.number(),
});

export type Review = z.infer<typeof reviewSchema>;

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.date().optional(),
  image: z.string().optional(),
  gameIds: z.array(z.number()),
  currentlyPlaying: z.number().optional(),
});

export type User = z.infer<typeof userSchema>;

export const accountSchema = z.object({
  id: z.string(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string(),
  access_token: z.string(),
  expires_at: z.string(),
  token_type: z.string(),
  scope: z.string(),
  id_token: z.string(),
  session_state: z.string(),
});

export type Account = z.infer<typeof accountSchema>;

export const sessionSchema = z.object({
  id: z.string(),
  userId: z.string(),
  expires: z.string(),
  sessionToken: z.string(),
});
export type Session = z.infer<typeof sessionSchema>;

export const verificationTokenSchema = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.date(),
});
export type VerificationToken = z.infer<typeof verificationTokenSchema>;

export const followSchema = z.object({
  id: z.string(),
  follower: z.string(),
  following: z.string(),
});
export type Follow = z.infer<typeof followSchema>;

export const collectionSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  userId: z.string(),
  gameIds: z.array(z.number()),
});

export type Collection = z.infer<typeof collectionSchema>;

export const likeSchema = z.object({
  id: z.string(),
  userId: z.string(),
  reviewId: z.string(),
});

export type Like = z.infer<typeof likeSchema>;

export const commentSchema = z.object({
  id: z.string(),
  userId: z.string(),
  reviewId: z.string(),
  content: z.string(),
});

export type Comment = z.infer<typeof commentSchema>;
