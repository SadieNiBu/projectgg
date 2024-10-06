import { Menubar, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import AuthButton from "./authButton";
import { Input } from "./ui/input";
import { getServerAuthSession } from "~/server/auth";

export function SearchBar() {
  return (
    <Input
      type="search"
      placeholder="Search 40,000+ Games..."
      className="border-none bg-[#0707077a] text-[20px] leading-[24px]"
    />
  );
}

const Navbar = async () => {
  const session = await getServerAuthSession();
  return (
    <Menubar className="absolute flex h-[60px] w-[100%] items-center justify-between bg-[#0707074F] px-4">
      <MenubarMenu>
        <MenubarTrigger className="h-[38px] w-[164px] text-[32px] leading-[38.4px] text-white">
          <a href="/">ProjectGG</a>
        </MenubarTrigger>
        <MenubarTrigger className="h-[41px] w-[820px] rounded-lg">
          <SearchBar />
        </MenubarTrigger>
        <MenubarTrigger
          asChild
          className="text-[32px] leading-[38.4px] text-white"
        >
          <AuthButton session={session} />
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navbar;
