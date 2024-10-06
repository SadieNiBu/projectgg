import { Game } from "~/lib/schemas/igdb";
import { constructImageUrl } from "~/lib/utils";

const GameList = async ({ game }: { game: Game }) => {
  if (!game.cover) {
    return (
      <div className="flex h-[102px] w-[75px] flex-col justify-center rounded-lg bg-gray-400 text-center text-sm">
        {game.name}
      </div>
    );
  }
  return (
    <img
      className="h-[102px] w-[75px] rounded-lg"
      src={constructImageUrl(game.cover?.image_id ?? "", "cover_big")}
    ></img>
  );
};

export default GameList;
