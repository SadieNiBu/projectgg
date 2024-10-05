import "~/styles/home.css";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import User from "~/lib/models/User";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();
  const data = await User.find();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main>
        <div className="grid grid-cols-[480px_minmax(0px,_0fr)_900px]">
          <div className="grid grid-rows-3 pl-[100px] pt-[145px]">
            <div className="update_progress text-nowrap pl-[8px] pt-[8px] text-[24px] font-[600] leading-[28.8px] text-white">
              Update Your Progress!
            </div>
            <div className="friend_activity pl-[48px] pt-[8px] text-[24px] font-[600] leading-[28.8px] text-white">
              Friend Activity
            </div>
            <div className="new_releases pl-[48px] pt-[8px] text-[24px] font-[600] leading-[28.8px] text-white">
              New Releases
            </div>
          </div>
          <div className="pt-[85px]">
            <svg
              width="1"
              height="705"
              viewBox="0 0 1 705"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                x2="0.5"
                y2="705"
                stroke="url(#paint0_linear_32_882)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_32_882"
                  x1="-0.5"
                  y1="0"
                  x2="-0.5"
                  y2="705"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D267D2" />
                  <stop offset="0.36" stop-color="#973497" />
                  <stop offset="0.75" stop-color="#962896" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>THREE</div>
        </div>
      </main>
    </HydrateClient>
  );
}
