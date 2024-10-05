import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import "~/styles/profile.css";

export function ProfilePic() {
    return (
        <Avatar className="absolute ml-[50px] mt-[90px] w-[143px] h-[143px] border border-[#962896]">
            <AvatarImage src="https://freerangestock.com/sample/156726/a-person-standing-on-a-sidewalk-in-a-city.jpg" alt="@user"/>
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

const PersonalProfile = () => {
    return (
        <div>
            <ProfilePic />
            <p className="absolute font-[400] text-white text-[32px] leading-[38.4px] ml-[230px] mt-[90px]">User's Name</p>
            <p className="absolute font-[400] text-white text-[20px] leading-[24px] ml-[232px] bottom-[425px]">Hi everyone! My name is User's Name!<br />I really like to play video games, and this is my description of<br/> how many video games I love to play!</p>
            <div className="rectangle ml-[180px] mt-[200px]">

            </div>
        </div>
    )
}

export default PersonalProfile