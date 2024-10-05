import { ServerApiVersion } from "mongodb";
import mongoose from "mongoose";
import { env } from "~/env";

export let database: mongoose.Mongoose;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoose?: mongoose.Mongoose;
  };

  if (!globalWithMongo._mongoose) {
    globalWithMongo._mongoose = await mongoose.connect(env.MONGODB_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
  }
  database = globalWithMongo._mongoose;
} else {
  // In production mode, it's best to not use a global variable.
  database = await mongoose.connect(env.MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
}
