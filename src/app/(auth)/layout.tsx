import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex h-screen w-full  justify-center items-center overflow-auto ">
      <Outlet />
    </div>
  );
};
export default AuthLayout;
