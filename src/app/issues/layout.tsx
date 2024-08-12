import LeftNavbar from "@/components/LeftNavbar";
import { Outlet } from "react-router-dom";

const IssuesLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <LeftNavbar />
      <Outlet />
    </div>
  );
};
export default IssuesLayout;
