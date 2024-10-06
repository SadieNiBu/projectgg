import AuthButton from "./authButton";
import { SearchBar } from "./SearchBar";
import { Input } from "./ui/input";
import { getServerAuthSession } from "~/server/auth";



const Navbar = async () => {
  const session = await getServerAuthSession();
  return (
    <nav className="absolute top-0 left-0 flex h-[60px] w-[100%] items-center justify-between bg-[#0707074F] px-4">
      <div className="h-[38px] w-[164px] text-[32px] leading-[38.4px] text-white">
        <a href="/">ProjectGG</a>
      </div>
      <SearchBar />
      <div className="text-[32px] leading-[38.4px] text-white">
        <AuthButton session={session} />
      </div>
    </nav>
  );
};

export default Navbar;
