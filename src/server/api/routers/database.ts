import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import User from "~/lib/models/User";
import { z } from "zod";

export const databaseRouter = createTRPCRouter({
  getUserById: publicProcedure.input(z.string()).query(async ({ input }) => {
    const user = await User.findById(input);
    if (!user) {
      throw new Error("User not found");
    }
    return user.toJSON();
  }),
});
