import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function ProfilePic() {
    return (
        <Avatar className="absolute top-[9px] left-[14px]">
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsMbmHUXuBiVl35tC2MHTK6myuEna6nvGSzQ&s" alt="@user"/>
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

const Review = () => {
    return (
        <div className="review m-[22px] z-[-999] relative">
            <img className="rounded-3xl h-[142px] w-[726px] object-cover brightness-50 opacity-90"
            src="https://media.discordapp.net/attachments/1290909039017857046/1292050592595841126/thumb-1920-1319952.png?ex=67025362&is=670101e2&hm=569282500afcf6aaed8b6b537bfe7c1e04bee029c4ef8bfb732469215cde707b&=&format=webp&quality=lossless&width=2068&height=1164" / >
            <ProfilePic />
            <p className="absolute top-[5px] left-[65px] font-[600] text-[16px] leading-[22.4px] text-[hsla(0,0%,86%,1)]">Game Name</p>
            <p className="absolute top-[25px] left-[65px] font-[400] text-[16px] leading-[22.4px] text-[#B3B3B3]">User's Name</p>
            <p className="absolute top-[55px] left-[65px] font-[400] text-[16px] leading-[22.4px] text-[#F1F1F1]">Text Review Description Placeholder Text Please Place Text Here Text Review<br />Description Placeholder Text Please Place Text Here Text Review Description<br />Placeholder Text </p>
        </div>
    )
}

export default Review