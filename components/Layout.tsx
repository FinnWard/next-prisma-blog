import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className="grid">
    <div className="mt-5 flex w-full max-w-7xl flex-col justify-self-center rounded-md bg-slate-50 p-10 shadow-md">
      <Header />
      <div>{props.children}</div>
    </div>
  </div>
);

export default Layout;
