import "~/styles/profile.css";
import PersonalReview from "~/components/personal_review";
import GameList from "~/components/game_list";
import { api, HydrateClient } from "~/trpc/server";
import PersonalProfile from "~/components/personal_profile";
import { Game } from "~/lib/schemas/igdb";
import { getServerAuthSession } from "~/server/auth";
import { type Review as DbReview } from "~/lib/schemas/database";
import { constructImageUrl } from "~/lib/utils";

export default async function ProfilePage() {
  const session = await getServerAuthSession();
  let recentlyPlayed: Game[] = [];
  let friendActivity: DbReview[] = [];
  let allActivity: DbReview[] = [];
  const newReleases = await api.igdb.getNewReleases({ limit: 3 });
  const gotwAggregate = await api.database.getGamesOfTheWeek();
  const gamesOfTheWeek = await api.igdb.getGamesById(
    gotwAggregate.map((game) => game._id),
  );
  if (session?.user) {
    const recentlyReviewed = await api.database.getReviewsByUser(
      session.user.id,
    );
    if (recentlyReviewed.length !== 0) {
      const recentlyReviewedGames = recentlyReviewed.map(
        (review) => review.gameId,
      );
      recentlyPlayed = await api.igdb.getGamesById(recentlyReviewedGames);
      console.log(recentlyPlayed);
    }
    friendActivity = await api.database.getFriendActivity();
  } else {
    allActivity = await api.database.getAllReviews({ limit: 3 });
  }
  let games = await api.igdb.getGamesById([2]);
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
            alt="Aninmal Crossing: New Leaf"
            className="h-full w-full object-cover"
          ></img>
          <div className="from-opacity-100 to-opacity-0 z-100 absolute inset-0 bg-gradient-to-b from-transparent to-[#292B43]"></div>
        </div>
        <p className="absolute pl-[152px] pt-[65px] text-[32px] font-[400] leading-[38.4px] text-white">
          Collections
        </p>
        <div className="grid grid-cols-[480px_minmax(0px,_0fr)_900px]">
          <div className="grid grid-rows-3 pl-[100px] pt-[120px]">
            <div className="list1 text-nowrap pl-[8px] pt-[8px] text-[24px] font-[600] leading-[28.8px] text-white">
              <p className="pb-[2px] pl-[52px]">Cozy Games</p>
              <div className="games grid grid-cols-3">
                {newReleases.map(({ game }) => (
                  <GameList key={game.id} game={game} />
                ))}
              </div>
            </div>
            <div className="list2 pl-[8px] pt-[7px] text-[24px] font-[600] leading-[28.8px] text-white">
              <p className="pl-[65px] pt-[0px]">Simulators</p>
              <div className="games grid grid-cols-3">
              {newReleases.map(({ game }) => (
                  <GameList key={game.id} game={game} />
                ))}
              </div>
            </div>
            <div className="list3 pl-[8px] pt-[7px] text-[24px] font-[600] leading-[28.8px] text-white">
              <p className="pl-[75px] pt-[0px]">Favorites</p>
              <div className="games grid grid-cols-3">
              {newReleases.map(({ game }) => (
                  <GameList key={game.id} game={game} />
                ))}
              </div>
            </div>
          </div>
          <div className="pt-[85px]">
            <svg
              width="1"
              height="680"
              viewBox="0 0 1 705"
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
          <div className="grid grid-rows-2">
            <PersonalProfile />
            <div className="grid grid-rows-3 pl-[40px]">
              <p className="review_text">Reviews</p>
            </div>
            <div className="h-[500px] pl-[45px] pt-[110px]">
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
