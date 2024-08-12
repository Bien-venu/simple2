import MainHeader from "./MainHeader";
import IssuesCard from "./IssuesCard";
import { useAppContext } from "@/context/AppContext";
import Cookies from "js-cookie";

const Issues = () => {
   const { message, setMessage, data } = useAppContext();
 const email = Cookies.get("email");
   // Filter data to include only messages where email matches m.user
   const filteredData = data.filter((m) => m.user === email);

  return (
    <div className="flex flex-1 flex-col pb-2 pr-2">
      <MainHeader />
      <div className="flex h-full w-full flex-col rounded border gap-2 border-border bg-bgGray">
        <h1 className="border-b border-border p-2 px-8">My issues</h1>
        <div className="flex flex-col gap-2 px-8">
          {filteredData.map((m, index) => (
            <IssuesCard key={index} data={m} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Issues;
