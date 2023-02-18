// Header.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const Header: React.FC = () => {
  const router = useRouter();

  const { data: session, status } = useSession();

  let left = (
    <Link href="/">
      <button className="rounded border border-slate-500 bg-slate-100 px-3 py-1 hover:bg-slate-300">
        Feed
      </button>
    </Link>
  );

  let right = null;

  if (status === "loading") {
    left = (
      <Link href="/">
        <button className="rounded border border-slate-500 bg-slate-100 px-3 py-1 hover:bg-slate-300">
          Feed
        </button>
      </Link>
    );
    right = <p>Validating session ...</p>;
  }

  if (!session) {
    right = (
      <Link href="/api/auth/signin">
        <button className="rounded border border-slate-500 bg-slate-100 px-3 py-1 hover:bg-slate-300">
          Log in
        </button>
      </Link>
    );
  }

  if (session) {
    left = (
      <div className="flex justify-between gap-5 align-middle">
        <Link href="/">
          {" "}
          <button className="h-10 rounded border border-slate-500 bg-slate-100 px-3 py-1 hover:bg-slate-300">
            Feed
          </button>
        </Link>
        <Link href="/drafts">
          {" "}
          <button className="h-10 rounded border border-slate-500 bg-slate-100 px-3 py-1 hover:bg-slate-300">
            My Drafts
          </button>
        </Link>
      </div>
    );
    right = (
      <div className="flex justify-center gap-5 align-middle">
        <p className="border-b border-slate-900 p-2">{session.user.name}</p>
        <Link href="/create" className="">
          <button className="h-10 rounded border border-slate-500 bg-slate-100 px-3 py-1 hover:bg-slate-300">
            New Post
          </button>
        </Link>
        <button
          className="h-10 rounded border border-slate-500 bg-slate-100 px-3 py-1 hover:bg-slate-300"
          onClick={() => signOut()}
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <nav className="flex justify-between py-4">
      {left}
      {right}
    </nav>
  );
};

export default Header;
