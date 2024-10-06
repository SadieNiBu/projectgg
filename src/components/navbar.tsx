import AuthButton from "./authButton";
import { Input } from "./ui/input";
import { getServerAuthSession } from "~/server/auth";

export function SearchBar() {
  return (
    <Input
      placeholder="Search 40,000+ Games..."
      className="max-w-lg border-none bg-[#0707077a] text-[20px] leading-[24px] text-white"
    />
  );
}

const Navbar = async () => {
  const session = await getServerAuthSession();
  return (
    <nav className="absolute flex h-[60px] w-[100%] items-center justify-between bg-[#0707074F] px-4">
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
