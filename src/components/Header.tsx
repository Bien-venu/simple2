import Cookies from "js-cookie";
import { Company } from "./Company";
import { Alert } from "./Alert";

const Header = () => {
  const username = Cookies.get("username"); // Use Cookies to get the value

  return (
    <div className="flex w-full justify-between px-5 pb-2">
      <Company />
      {username?.toLocaleLowerCase() === "admin" && <Alert />}
    </div>
  );
};

export default Header;
