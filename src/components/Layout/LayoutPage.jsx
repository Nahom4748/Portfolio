import React from "react";
import { Outlet } from "react-router-dom";
import Icons from "../HeroPage/Icons";
import Header from "../HeroPage/Header/Header";
function LayoutPage() {
  return (
    <div className="bg-from-pink-500 hover:to-orange-500">
      <Header />
      <Outlet />
      <Icons />
    </div>
  );
}

export default LayoutPage;
