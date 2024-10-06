import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@radix-ui/react-menubar"

import { Input } from "./ui/input"

export function SearchBar() {
    return <Input type="search" placeholder="Search 40,000+ Games..." className="leading-[24px] text-[20px] border-none bg-[#0707077a]"/>
  }
           

const Navbar = () => {
    return (
        <Menubar className="flex justify-between bg-[#0707074F] h-[60px] absolute w-[100%]">
            <MenubarMenu>
                <MenubarTrigger className="leading-[38.4px] text-[32px] w-[164px] h-[38px] text-white pt-2">
                    <a href="/">
                    ProjectGG
                    </a>
                </MenubarTrigger>
                <MenubarTrigger className="w-[820px] h-[41px] rounded-lg pt-2">
                    <SearchBar />
                </MenubarTrigger>
                <MenubarTrigger className="leading-[38.4px] text-[32px] text-white">
                    <a href="/api/auth/signin/">
                    <div className="grid grid-cols-2">
                        <p>Login</p>
                        <img className="w-[69px] justify-self-center -m-3" src="https://media.discordapp.net/attachments/1290909039017857046/1292301508955865098/discord-logo-discord-icon-transparent-free-png.png?ex=67033d11&is=6701eb91&hm=965e2b7f7c0dc41fd805f7aebf8e0e2ce66eb5cfb2e1e51f7728414ec6005ca6&=&format=webp&quality=lossless&width=1164&height=1164"/>
                    </div>
                    </a>
                </MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}

export default Navbar