import { ServerApiVersion } from "mongodb";
import mongoose from "mongoose";
import { env } from "~/env";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export let database = await mongoose.connect(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  dbName: "database",
});
