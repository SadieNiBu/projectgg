import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@radix-ui/react-menubar"

import { Input } from "./ui/input"

export function SearchBar() {
    return <Input type="search" placeholder="Search 40,000+ Games..." className="leading-[24px] text-[20px] border-none bg-[#07070721]"/>
  }
           

const Navbar = () => {
    return (
        <Menubar className="flex justify-between">
            <MenubarMenu>
                <MenubarTrigger className="leading-[38.4px] text-[32px] w-[164px] h-[38px] top-[6px] left-[13px] text-white">
                    ProjectGG
                </MenubarTrigger>
                <MenubarTrigger className="w-[820px] h-[41px] top-[6px] left-[310px] rounded-lg">
                    <SearchBar />
                </MenubarTrigger>
                <MenubarTrigger className="leading-[38.4px] text-[32px] w-[100px] h-[38px] top-[6px] left-[1345px] text-white">
                    Login
                </MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}

export default Navbar