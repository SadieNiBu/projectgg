import '~/styles/game.css'
import Link from "next/link";
import Game from "~/components/game";
import Review from "~/components/review";
import { LatestPost } from "~/components/ui/post";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import PersonalReview from "~/components/personal_review";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main>
      <div className="relative h-64 w-full z-[-99]">
          <img src="https://media.discordapp.net/attachments/1290909039017857046/1292050591954239528/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a.png?ex=67025362&is=670101e2&hm=e6d6c35111571c0181a419aaba5e9493674ac6cbe9597a34f53cc3130d9c70c1&=&format=webp&quality=lossless&width=2068&height=1164"
            alt="Aninmal Crossing: New Leaf" className="w-full h-full object-cover">
          </img>
          <div className="absolute inset-0 bg-gradient-to-b from-opacity-100 from-transparent to-opacity-0 to-[#292B43] z-100"></div>
        </div>
        <div className="grid grid-cols-[480px_minmax(0px,_0fr)_900px]">
        <div>

        </div>
        <div className="pt-[85px]">
            <svg width="1" height="705" viewBox="0 0 1 705" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.5" x2="0.5" y2="705" stroke="url(#paint0_linear_32_882)" />
              <defs>
                <linearGradient id="paint0_linear_32_882" x1="-0.5" y1="0" x2="-0.5" y2="705" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#D267D2" />
                  <stop offset="0.36" stop-color="#973497" />
                  <stop offset="0.75" stop-color="#962896" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <div className="grid grid-rows-2">  
              <div>
                <Game />
              </div>
              <div>
                
              </div>
            </div>
          </div>
          </div>
        <div className="h-[50px]"/>
      </main>
    </HydrateClient>
  );
}
