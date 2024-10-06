import { type Review } from "~/lib/schemas/database";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { api } from "~/trpc/server";
import { constructImageUrl } from "~/lib/utils";

export function ProfilePic({ url }: { url?: string }) {
  return (
    <Avatar className="absolute left-[14px] top-[9px]">
      <AvatarImage src={url} alt="@user" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

const Review = async ({ data }: { data: Review }) => {
  const user = await api.database.getUserById(data.userId.toString());
  const game = (await api.igdb.getGamesById([data.gameId])).at(0);
  if (!game) {
    throw new Error("Game not found");
  }

  return (
    <div className="review relative z-[-999] m-[22px]">
      <img
        className="h-[142px] w-[726px] rounded-3xl object-cover opacity-90 brightness-50"
        src={constructImageUrl(game.cover?.image_id ?? "", "1080p")}
      />
      <ProfilePic url={user.image} />
      <p className="absolute left-[65px] top-[5px] text-[16px] font-[600] leading-[22.4px] text-[hsla(0,0%,86%,1)]">
        {game.name}
      </p>
      <p className="absolute left-[65px] top-[25px] text-[16px] font-[400] leading-[22.4px] text-[#B3B3B3]">
        {user.name}
      </p>
      <p className="absolute left-[65px] top-[55px] text-[16px] font-[400] leading-[22.4px] text-[#F1F1F1]">
        {data.content}
      </p>
    </div>
  );
};

export default Review;
