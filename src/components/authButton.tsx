"use client";
import { signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { Session } from "next-auth";

const authButton = ({ session }: { session: Session | null }) => {
  if (session?.user) {
    return <Button onClick={() => signOut()}>Sign out</Button>;
  } else {
    return (
      <Button className="mr-4" onClick={() => signIn("discord")}>
        <img
          className="mr-2 w-8"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipartcraft.com%2Fimages%2Fdiscord-logo-transparent-rainbow-1.png&f=1&nofb=1&ipt=f059bcebab727dd6c208bb9826357090a7c89940b5756ed3af9fc1d47824fad6&ipo=images"
        />
        <p>Sign In</p>
      </Button>
    );
  }
};
export default authButton;
