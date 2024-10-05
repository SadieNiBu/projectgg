import { z } from "zod";

export const reviewSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  content: z.string(),
  user: z.string(),
  game: z.number(),
  rating: z.number(),
});

export type Review = z.infer<typeof reviewSchema>;

const baseUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.date().optional(),
  image: z.string().optional(),
  reviews: z.array(reviewSchema),
  games: z.array(z.number()),
});

export type User = z.infer<typeof baseUserSchema> & { following: User[] };

export const userSchema: z.ZodType<User> = baseUserSchema.extend({
  following: z.lazy(() => userSchema.array()),
});

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
