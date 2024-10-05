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
                    ProjectGG
                </MenubarTrigger>
                <MenubarTrigger className="w-[820px] h-[41px] rounded-lg pt-2">
                    <SearchBar />
                </MenubarTrigger>
                <MenubarTrigger className="leading-[38.4px] text-[32px] w-[100px] h-[38px] text-white pt-2">
                    Login
                </MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}

export default Navbar