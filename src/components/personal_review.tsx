import { Review, User } from "~/lib/schemas/database";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import UpVote from "./upvote";
import { api } from "~/trpc/server";

export function ProfilePic({ url }: { url: string }) {
  return (
    <Avatar className="absolute left-[14px] top-[9px]">
      <AvatarImage src={url} alt="@user" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

const PersonalReview = async ({
  reviewData,
  userData,
}: {
  reviewData: Review;
  userData: User;
}) => {
  const game = (await api.igdb.getGamesById([reviewData.gameId])).at(0);
  return (
    <div>
      <div className="review relative z-[-999] m-[22px]">
        <div className="h-[142px] w-[726px] rounded-3xl bg-slate-800 object-cover opacity-90 brightness-50" />
        <ProfilePic url={userData.image ?? ""} />
        <div className="absolute bottom-[25px] left-[17px]">
          <UpVote />
        </div>
        <p className="absolute left-[65px] top-[5px] text-[16px] font-[600] leading-[22.4px] text-[hsla(0,0%,86%,1)]">
          {game?.name}
        </p>
        <p className="absolute left-[65px] top-[25px] text-[16px] font-[400] leading-[22.4px] text-[#B3B3B3]">
          {userData.name}
        </p>
        <p className="absolute left-[65px] top-[55px] text-[16px] font-[400] leading-[22.4px] text-[#F1F1F1]">
          {reviewData.content}
        </p>
      </div>
    </div>
  );
};

export default PersonalReview;
