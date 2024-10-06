import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Showcase from "./showcase";
import Showcase_Item from "./showcase_item";
import "~/styles/profile.css";
import { User } from "~/lib/schemas/database";

export function ProfilePic({ url }) {
  return (
    <Avatar className="absolute ml-[50px] mt-[0px] h-[143px] w-[143px] border border-[#962896]">
      <AvatarImage src={url} alt="@user" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

const PersonalProfile = ({ userData }: { userData: User }) => {
  return (
    <div>
      <ProfilePic url={userData.image} />
      <p className="absolute ml-[230px] mt-[0px] text-[32px] font-[400] leading-[38.4px] text-white">
        {userData.name}
      </p>
      <p className="absolute top-[302px] ml-[232px] text-[20px] font-[400] leading-[24px] text-white">
        Hi everyone! My name is {userData.name}!
        <br />I really like to play video games, and this is my description of
        <br /> how many video games I love to play!
      </p>
      <Showcase />
    </div>
  );
};

export default PersonalProfile;
