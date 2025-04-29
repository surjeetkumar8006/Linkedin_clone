import React from "react";
import Navbar from "@/Component/Navbar";

function UserLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default UserLayout;
