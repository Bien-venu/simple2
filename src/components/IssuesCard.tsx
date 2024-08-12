/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Circle,
  HelpCircle,
  LucideProps
} from "lucide-react";
import { IconType } from "react-icons";
import { BiSignal2, BiSignal3, BiSignal4 } from "react-icons/bi";
import {
  BsCalendar2Event,
  BsCalendar2X,
  BsFillExclamationSquareFill,
} from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiProgress1Line, RiProgress4Line, RiProgress6Line, RiProgress7Line, RiProgress8Line } from "react-icons/ri";
import { RxDotsHorizontal } from "react-icons/rx";
import { Link } from "react-router-dom";

const priorities = [
  {
    value: "no priority",
    label: "No priority",
    icon: RxDotsHorizontal,
  },
  {
    value: "urgent",
    label: "Urgent",
    icon: BsFillExclamationSquareFill,
  },
  {
    value: "high",
    label: "High",
    icon: BiSignal4,
  },
  {
    value: "medium",
    label: "Medium",
    icon: BiSignal3,
  },
  {
    value: "low",
    label: "Low",
    icon: BiSignal2,
  },
];

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

const labels = [
  {
    value: "improvement",
    label: "Improvement",
    icon: FaCircle,
  },
  {
    value: "bug",
    label: "Bug",
    icon: FaCircle,
  },
  {
    value: "feature",
    label: "Feature",
    icon: FaCircle,
  },
];

const getIconClassName = (
  icon:
    | IconType
    | React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
      >,
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

const IssuesCard = ({ data }: any) => {

  const priority = priorities.find(
    (priority) => priority.value === data.priority.toLowerCase(),
  );

  const status = statuses.find(
    (status) => status.value === data.status.toLowerCase(),
  );
  const label = labels.find(
    (label) => label.value === data.labels.toLowerCase(),
  );
  const userInitials = data?.user?.slice(0, 2) || "N/A";

  // Helper function to parse the date string into a Date object
  const parseDate = (dateString: string) => {
    // Parse the date using the date-fns library or JavaScript Date object
    return new Date(dateString);
  };

  // Get the current date
  const currentDate = new Date();

  // Check if a.date is defined and is a future date
  const isFutureDate = data.date ? parseDate(data.date) > currentDate : false;

  return (
    <Link
      to={`/issue/${data._id}`}
      className="flex h-fit w-full items-center justify-between border border-border p-2 px-6 text-xs font-semibold"
    >
      <div className="flex items-center gap-1">
        {priority && <priority.icon className="h-4 w-4 text-grey" />}
        <h2 className="h-full text-grey">{data.project}</h2>
        {status && (
          <status.icon className={getIconClassName(status.icon) + ` h-4 w-4`} />
        )}
        <h2 className="">{data.task}</h2>
        <div className="flex items-center text-grey">
          <MdKeyboardArrowRight className="h-4 w-4" />
          {data.name}
        </div>
      </div>
      <div className="flex gap-2 text-grey">
        <div className="flex items-center justify-center rounded-xl border border-border px-2">
          {label && (
            <label.icon
              className={`${label.value === "improvement" && "text-improvement"} ${label.value === "bug" && "text-bug"} ${label.value === "feature" && "text-feature"} mr-2 h-2 w-2`}
            />
          )}
          {data.labels}
        </div>
        <div className="flex items-center justify-center gap-2 rounded-xl border border-border px-2">
          {isFutureDate ? (
            <BsCalendar2Event size={15} className="text-improvement" />
          ) : (
            <BsCalendar2X size={15} className="text-bug" />
          )}
          {data.date}
        </div>
        <div className="mr-[-10px] flex h-6 w-6 items-center justify-center rounded-full border border-bgGray bg-bug text-xs text-white uppercase">
          {userInitials}
        </div>
      </div>
    </Link>
  );
};

export default IssuesCard;
