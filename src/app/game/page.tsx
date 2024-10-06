import "~/styles/game.css";
import Game from "~/components/game";
import Review from "~/components/review";
import Divider from "~/components/ui/divider";
import { api, HydrateClient } from "~/trpc/server";
import PersonalReview from "~/components/personal_review";

export default async function GamePage() {
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
        <div className="grid grid-cols-[.5fr_minmax(0px,_0fr)_1fr_minmax(0px,_0fr)_.5fr]">
          <div></div>
          {Divider()}
          <div>
            <div className="grid grid-rows-2">
              <Game />
              <div className="pl-[40px] pt-[20px] text-[24px] font-[600] leading-[28.8px] text-white">
                <p className="pl-10">Reviews</p>
                <div>
                  <Review />
                  <PersonalReview />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="h-[50px]" />
      </main>
    </HydrateClient>
  );
}
