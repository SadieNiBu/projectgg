"use client"
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "./ui/input";

export function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputRef.current) {
      const query = inputRef.current.value;
      router.push(`/search/${query}`);
    }
  };

  return (
    <Input 
      ref={inputRef}
      placeholder="Search 40,000+ Games..."
      className="max-w-lg border-none bg-[#0707077a] text-[20px] leading-[24px] text-white"
      onKeyDown={handleKeyDown}
    />
  );
}