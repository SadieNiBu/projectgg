import Link from "next/link";
import { LatestPost } from "~/app/components/post";
import User from "~/lib/models/User";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();
  const data = await User.find();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className=""></main>
    </HydrateClient>
  );
}
