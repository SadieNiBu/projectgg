import "~/styles/profile.css";
import PersonalReview from "~/components/personal_review";
import GameList from "~/components/game_list";
import { api, HydrateClient } from "~/trpc/server";
import PersonalProfile from "~/components/personal_profile";

export default async function ProfilePage() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main>
        <div className="relative z-[-99] h-64 w-full">
          <img
            src="https://media.discordapp.net/attachments/1290909039017857046/1292050591954239528/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a.png?ex=67025362&is=670101e2&hm=e6d6c35111571c0181a419aaba5e9493674ac6cbe9597a34f53cc3130d9c70c1&=&format=webp&quality=lossless&width=2068&height=1164"
            alt="Aninmal Crossing: New Leaf"
            className="h-full w-full object-cover"
          ></img>
          <div className="from-opacity-100 to-opacity-0 z-100 absolute inset-0 bg-gradient-to-b from-transparent to-[#292B43]"></div>
        </div>
        <p className="absolute pl-[152px] pt-[85px] text-[32px] font-[400] leading-[38.4px] text-white">
          Collections
        </p>
        <div className="grid grid-cols-[480px_minmax(0px,_0fr)_900px]">
          <div className="grid grid-rows-3 pl-[100px] pt-[145px]">
            <div className="list1 text-nowrap pl-[8px] pt-[8px] text-[24px] font-[600] leading-[28.8px] text-white">
              <p className="pb-[2px] pl-[52px]">Cozy Games</p>
              <div className="games grid grid-cols-3">
                <GameList />
                <GameList />
                <GameList />
              </div>
            </div>
            <div className="list2 pl-[8px] pt-[7px] text-[24px] font-[600] leading-[28.8px] text-white">
              <p className="pl-[65px] pt-[0px]">Simulators</p>
              <div className="games grid grid-cols-3">
                <GameList />
                <GameList />
                <GameList />
              </div>
            </div>
            <div className="list3 pl-[8px] pt-[7px] text-[24px] font-[600] leading-[28.8px] text-white">
              <p className="pl-[75px] pt-[0px]">Favorites</p>
              <div className="games grid grid-cols-3">
                <GameList />
                <GameList />
                <GameList />
              </div>
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
          <div className="grid grid-rows-2">
            <PersonalProfile />
            <div className="grid grid-rows-3 pl-[40px]">
              <p className="review_text">Reviews</p>
            </div>
            <div className="h-[500px] pl-[40px] pt-[200px]">
              <PersonalReview />
              <PersonalReview />
            </div>
          </div>
        </div>
        <div className="h-[50px]" />
      </main>
    </HydrateClient>
  );
}
