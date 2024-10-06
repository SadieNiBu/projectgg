import "~/styles/game.css";
import GameID from "~/components/game";
import Review from "~/components/review";
import Divider from "~/components/ui/divider";
import { api, HydrateClient } from "~/trpc/server";
import PersonalReview from "~/components/personal_review";
import { GetServerSideProps } from 'next';
import { getServerAuthSession } from "~/server/auth";
import { constructImageUrl } from "~/lib/utils";
interface GamePageProps {
    params: {
      gameID: string;
    };
  }

export default async function Page({ params }: GamePageProps)
{
    // get game id from params as number
    const gameID = parseInt(params.gameID);
    const session = await getServerAuthSession();
    let games = await api.igdb.getGamesById([gameID]);
    const game = games[0];
    if (!game)
    {
        return <div>Game not found</div>;
    }

    // fetch reviews for this game

    // fetch banner for this game https://images.igdb.com/igdb/image/upload/t_{size}/{hash}.jpg
    const banner = constructImageUrl(game.cover?.image_id ?? "", "1080p");






    return (
        <HydrateClient>
            <main>
                <div className="relative z-[-99] h-64 w-full">
                    <img
                        src={banner}
                        alt=""
                        className="h-full w-full object-cover"
                    ></img>
                    <div className="from-opacity-100 to-opacity-0 z-100 absolute inset-0 bg-gradient-to-b from-transparent to-[#292B43]"></div>
                </div>
                <div className="grid grid-cols-[.5fr_minmax(0px,_0fr)_1fr_minmax(0px,_0fr)_.5fr]">
                    <div></div>
                    {Divider()}
                    <div>
                        <div className="grid grid-rows-2">
                            <GameID id={game.id} name={game.name} cover={game.cover} />
                            <div className="pl-[40px] pt-[20px] text-[24px] font-[600] leading-[28.8px] text-white">
                                <p className="pl-10">Reviews</p>
                                <div>
                                    {/* <Review /> */}
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
