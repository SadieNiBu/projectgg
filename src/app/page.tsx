import "~/styles/home.css";
import Review from "~/components/review";
import GameList from "~/components/game_list";
import { HydrateClient } from "~/trpc/server";

export default async function HomePage() {
  return (
    <HydrateClient>
      <main>
        <div className="relative z-[-99] h-64 w-full">
          <img
            src="https://media.discordapp.net/attachments/1290909039017857046/1292050593258536960/sea-of-thieves-4.png?ex=67025362&is=670101e2&hm=1b85e6fc2030fc0d7bd0ac0e932062e62724ee58e2a02289a39223353aed55e4&=&format=webp&quality=lossless&width=2068&height=1164"
            alt="Sea of Thieves"
            className="h-full w-full object-cover"
          ></img>
          <div className="from-opacity-100 to-opacity-0 z-100 absolute inset-0 bg-gradient-to-b from-transparent to-[#292B43]"></div>
        </div>

        <div className="grid grid-cols-[480px_minmax(0px,_0fr)_900px]">
          <div className="grid grid-rows-3 pl-[100px]">
            <div className="update_progress text-nowrap pl-[8px] pt-[8px] text-[24px] font-[600] leading-[28.8px] text-white">
              Update Your Progress!
              <div className="games grid grid-cols-3">
                <GameList />
                <GameList />
                <GameList />
              </div>
            </div>
            <div className="friend_activity pl-[8px] pt-[7px] text-[24px] font-[600] leading-[28.8px] text-white">
              <p className="pl-[48px] pt-[0px]">Friend Activity</p>
              <div className="games grid grid-cols-3">
                <GameList />
                <GameList />
                <GameList />
              </div>
            </div>
            <div className="new_releases pl-[8px] pt-[7px] text-[24px] font-[600] leading-[28.8px] text-white">
              <p className="pl-[48px] pt-[0px]">New Releases</p>
              <div className="games grid grid-cols-3">
                <GameList />
                <GameList />
                <GameList />
              </div>
            </div>
          </div>
          <div className="p-[0px]">
            <svg
              width="1"
              height="680"
              viewBox="0 0 1 700"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                x2="0.5"
                y2="680"
                stroke="url(#paint0_linear_32_882)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_32_882"
                  x1="-0.5"
                  y1="0"
                  x2="-0.5"
                  y2="680"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D267D2" />
                  <stop offset="0.36" stop-color="#973497" />
                  <stop offset="0.75" stop-color="#962896" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <p className="pl-[120px] pt-[px] text-[24px] font-[600] leading-[28.8px] text-white">
              Activity
            </p>
            <div className="grid grid-rows-3 pl-[80px]">
              <Review />
              <Review />
              <Review />
            </div>
          </div>
        </div>
        <div className="h-[50px]" />
      </main>
    </HydrateClient>
  );
}
