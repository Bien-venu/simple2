import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen w-full bg-background bg text-white">
      <Outlet />
    </div>
  );
};
export default MainLayout;
