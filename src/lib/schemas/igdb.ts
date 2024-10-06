import { z } from "zod";

export const coverSchema = z.object({
  id: z.number(),
  url: z.string(),
  // used to construct image urls
  // https://api-docs.igdb.com/#images
  // sizes to note: cover_big for picture, 1080p for banner
  image_id: z.string(),
});

export const gamesSchema = z.object({
  id: z.number(),
  name: z.string(),
  cover: coverSchema.optional(),
});

export const releaseDatesSchema = z.object({
  id: z.number(),
  game: gamesSchema,
  date: z.number(),
});
