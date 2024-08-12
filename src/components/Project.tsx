import MainHeader from "./MainHeader";
import { useAppContext } from "@/context/AppContext";
import { IoBusinessOutline } from "react-icons/io5";

const Project = () => {
  const { data, loading } = useAppContext();

  // Extract unique project names
  const uniqueProjects = Array.from(new Set(data.map((m) => m.project)));

  return (
    <div className="flex flex-1 flex-col pb-2 pr-2">
      <MainHeader />
      <div className="flex h-full w-full flex-col gap-2 overflow-auto rounded border border-border bg-bgGray">
        <h1 className="border-b border-border p-2 px-8">Projects</h1>

        <div className="flex flex-col gap-2">
          {loading ? (
            <div className="flex h-full w-full items-center justify-center">
              Loading...
            </div>
          ) : (
            <div className="flex flex-col text-grey gap-2 px-8">
              {uniqueProjects.map((project, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 border border-border p-2 px-8 text-sm"
                >
                  <IoBusinessOutline size={20}/>
                  <h1>{project}</h1>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
