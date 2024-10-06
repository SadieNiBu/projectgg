import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { gamesSchema, releaseDatesSchema } from "~/lib/schemas/igdb";

async function igdbRequest(
  endpoint: string,
  body: string,
  accessToken: string,
) {
  return fetch(`https://api.igdb.com/v4/${endpoint}`, {
    method: "POST",
    //@ts-ignore
    headers: {
      "Client-ID": process.env.IGDB_CLIENT_ID,
      Authorization: `Bearer ${accessToken}`,
    },
    body,
  });
}

export const igdbRouter = createTRPCRouter({
  getAllGames: publicProcedure
    .input(z.object({ limit: z.number() }))
    .query(async ({ input, ctx }) => {
      const gamesResponse = await igdbRequest(
        "games",
        `fields name; limit ${input.limit};`,
        ctx.igdbAccessToken,
      );
      const games = await gamesResponse.json();
      return z.array(gamesSchema).parse(games);
    }),
  getGamesById: publicProcedure
    .input(z.number().array())
    .query(async ({ input, ctx }) => {
      const gameResponse = await igdbRequest(
        "games",
        `fields name,cover.url,cover.image_id,summary,rating, first_release_date; where id = (${input});`,
        ctx.igdbAccessToken,
      );
      const games = await gameResponse.json(); 
      console.log(games);
      return gamesSchema.array().parse(games);
    }),
  getNewReleases: publicProcedure
    .input(z.object({ limit: z.number() }))
    .query(async ({ input, ctx }) => {
      const currentTimeInSeconds = Math.floor(Date.now() / 1000);
      const newReleasesResponse = await igdbRequest(
        "release_dates",
        `fields game.name,game.cover.image_id,game.cover.url,date; limit ${input.limit}; where date < ${currentTimeInSeconds}; sort date desc;`,
        ctx.igdbAccessToken,
      );
      const newReleases = await newReleasesResponse.json();
      return z.array(releaseDatesSchema).parse(newReleases);
    }),
});
