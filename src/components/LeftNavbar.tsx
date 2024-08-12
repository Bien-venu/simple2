import { useState } from "react";
import { Company } from "./Company";
import Header from "./Header";
import Individual from "./Individual";
import { Teams } from "./Teams";
import Cookies from "js-cookie";

const LeftNavbar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const name = Cookies.get("username");
  return (
    <div className="flex h-screen w-80 flex-col gap-4 py-4">
      <Header />
      {name?.toLocaleLowerCase() != "admin" && <Individual />}
      <Teams />
    </div>
  );
};

export default LeftNavbar;
