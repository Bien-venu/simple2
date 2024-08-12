import { useAppContext } from "@/context/AppContext";
import {
  Circle,
  HelpCircle,
  LucideProps
} from "lucide-react";
import { IconType } from "react-icons";
import { IoIosCloseCircle } from "react-icons/io";
import { RiProgress1Line, RiProgress4Line, RiProgress6Line, RiProgress7Line, RiProgress8Line } from "react-icons/ri";
import IssuesCard from "./IssuesCard";
import MainHeader from "./MainHeader";

const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: RiProgress1Line,
  },
  {
    value: "halfly done",
    label: "Halfly Done",
    icon: RiProgress4Line,
  },
  {
    value: "conflict",
    label: "Conflict",
    icon: RiProgress6Line,
  },
  {
    value: "complete",
    label: "Completed",
    icon: RiProgress7Line,
  },
  {
    value: "review",
    label: "In Review",
    icon: RiProgress7Line,
  },
  {
    value: "done",
    label: "Done",
    icon: RiProgress8Line,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: IoIosCloseCircle,
  },
];

const getIconClassName = (
  icon:
    | React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
      >
    | IconType,
) => {
  switch (icon) {
    case RiProgress8Line:
      return "text-done";
    case RiProgress6Line:
      return "text-bug";
    case RiProgress1Line:
      return "text-inprogress";
    case RiProgress4Line:
      return "text-inprogress";
    case RiProgress7Line:
      return "text-improvement";
    default:
      return "";
  }
};
const Backlog = () => {
    const { data, loading } = useAppContext();

  const message = data.filter(
    (message) => message.status.toLowerCase() === "backlog",
  );

  const status = statuses.filter((status) => status.value === "backlog");
  return (
    <div className="flex flex-1 flex-col pb-2 pr-2">
      <MainHeader />
      <div className="flex h-full w-full flex-col gap-2 overflow-auto rounded border border-border bg-bgGray">
        <h1 className="border-b border-border p-2 px-8">Active</h1>
        <div className="flex flex-col gap-2">
          {loading ? (
            <div className="flex h-full w-full items-center justify-center">
              Loading...
            </div>
          ) : (
            <>
              {status
                .filter((stat) =>
                  data.some((m) => m.status.toLowerCase() === stat.value),
                )
                .map((stat, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 border-border bg-border p-2 px-8 text-sm">
                      <stat.icon
                        className={getIconClassName(stat.icon) + ` h-4 w-4`}
                      />
                      <h1>{stat.label}</h1>
                    </div>
                    <div className="flex flex-col gap-2 px-8">
                      {message
                        .filter((m) => m.status.toLowerCase() === stat.value)
                        .map((m, index) => (
                          <IssuesCard key={index} data={m} />
                        ))}
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Backlog;
