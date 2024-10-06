import '~/styles/game.css'
import Link from "next/link";
import Game from "~/components/game";
import Review from "~/components/review";
import Divider from '~/components/ui/divider';
import { LatestPost } from "~/components/ui/post";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import PersonalReview from "~/components/personal_review";

export default async function Home()
{
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();
  // get user or set null
  const data = /*await User.find()*/ null;

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
        <div className="grid grid-cols-[.5fr_minmax(0px,_0fr)_1fr_minmax(0px,_0fr)_.5fr]">
          <div>

          </div>
          {Divider()}
          <div>
            <div className="grid grid-rows-2">
                <Game />
              <div className='text-white font-[600] text-[24px] leading-[28.8px] pt-[20px] pl-[40px]'>
                <p className='pl-10'>Reviews</p>
                <div>
                  <Review />
                  <PersonalReview />
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className="h-[50px]" />
      </main>
    </HydrateClient>
  );
}
