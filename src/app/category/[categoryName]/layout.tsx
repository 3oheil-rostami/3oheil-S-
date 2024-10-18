import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarMenu from "@/components/NavbarMenu";
import Topbar from "@/components/Topbar";
import React, { ReactNode } from "react";

const CategoryLayout = ({ children }: { children: Readonly<ReactNode> }) => {
  return (
    <div>
      <Topbar srcImage="" />
      <div className="w-full flex flex-col items-center justify-center divide-y-2 divide-secondary-100">
        <Navbar />
        <NavbarMenu />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default CategoryLayout;
