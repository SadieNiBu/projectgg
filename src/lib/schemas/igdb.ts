import { z } from "zod";

export const coverSchema = z.object({
  id: z.number(),
  url: z.string(),
  // used to construct image urls
  // https://api-docs.igdb.com/#images
  // sizes to note: cover_big for picture, 1080p for banner
  image_id: z.string(),
});

export type Cover = z.infer<typeof coverSchema>;

export const gamesSchema = z.object({
  id: z.number(),
  name: z.string(),
  first_release_date: z.number().optional(),
  rating: z.number().optional(),
  summary: z.string().optional(),
  cover: coverSchema.optional(),
});

export type Game = z.infer<typeof gamesSchema>;

export const releaseDatesSchema = z.object({
  id: z.number(),
  game: gamesSchema,
  date: z.number(),
});

export type ReleaseDate = z.infer<typeof releaseDatesSchema>;
