import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAppContext } from "@/context/AppContext";
import { Link } from "react-router-dom";

export function Teams() {
  const { filter, setFilter } = useAppContext();
  
  return (
    <Accordion type="single" collapsible className="w-full px-4 text-grey">
      <AccordionItem value="item-1">
        <AccordionTrigger>Projects</AccordionTrigger>
        <AccordionContent>
          <Accordion type="single" collapsible className="w-full px-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    fill={"none"}
                    className="text-team"
                  >
                    <path
                      d="M9.76722 18.8486L12 14L14.2328 18.8486C14.8804 20.2549 15.2042 20.958 14.8612 21.4656C14.8518 21.4795 14.8421 21.4932 14.8321 21.5067C14.4659 22 13.6439 22 12 22C10.3561 22 9.53409 22 9.16795 21.5067C9.15792 21.4932 9.14821 21.4795 9.13882 21.4656C8.79585 20.958 9.11964 20.2549 9.76722 18.8486Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 18.001C2.74418 16.3295 2 14.2516 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2516 21.2558 16.3295 20 18.001"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7.52779 16C6.57771 14.9385 6 13.5367 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 13.5367 17.4223 14.9385 16.4722 16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <h1 className="text-white">Icon v1</h1>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col px-4 text-xs">
                  <div className="flex flex-col text-xs">
                    <Link
                      to={`/issues`}
                      className={` ${
                        filter === "tasks" && "bg-hover"
                      } flex items-center gap-1 rounded p-1 py-2 text-grey hover:bg-bgGray hover:text-white`}
                      onClick={() => setFilter("tasks")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={19}
                        height={19}
                        fill={"none"}
                      >
                        <path
                          d="M2 12.4C2 9.38301 2 7.87452 2.94627 6.93726C3.89254 6 5.41554 6 8.46154 6H9.53846C12.5845 6 14.1075 6 15.0537 6.93726C16 7.87452 16 9.38301 16 12.4V15.6C16 18.617 16 20.1255 15.0537 21.0627C14.1075 22 12.5845 22 9.53846 22H8.46154C5.41554 22 3.89254 22 2.94627 21.0627C2 20.1255 2 18.617 2 15.6V12.4Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.5376 16H16.4608C19.072 16 20.3776 16 21.1888 15.1799C22 14.3598 22 13.0399 22 10.4V7.6C22 4.96013 22 3.6402 21.1888 2.8201C20.3776 2 19.072 2 16.4608 2H15.5376C12.9264 2 11.6208 2 10.8096 2.8201C10.1002 3.53726 10.0112 4.63664 10 6.66667"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 12H9M6 17H11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M10.5 3L14.5 6.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h1 className="text-white">Issues</h1>
                    </Link>
                    <div className="mx-3 flex flex-col border-l px-2">
                      <Link
                        to={`/issues`}
                        className={` ${
                          filter === "active" && "bg-hover"
                        } flex items-center gap-1 rounded p-1 py-2 text-white hover:bg-bgGray`}
                        onClick={() => setFilter("active")}
                      >
                        Active
                      </Link>
                      <Link
                        to={`/issues`}
                        className={` ${
                          filter === "backlog" && "bg-hover"
                        } flex items-center gap-1 rounded p-1 py-2 text-white hover:bg-bgGray`}
                        onClick={() => setFilter("backlog")}
                      >
                        Backlog
                      </Link>
                    </div>
                  </div>
                  <Link
                    to={`/issues`}
                    className={` ${
                      filter === "project" && "bg-hover"
                    } flex items-center gap-1 rounded p-1 py-2 text-grey hover:bg-hover hover:text-white`}
                    onClick={() => setFilter("project")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={19}
                      height={19}
                      fill={"none"}
                    >
                      <path
                        d="M12 22C11.1818 22 10.4002 21.6698 8.83693 21.0095C4.94564 19.3657 3 18.5438 3 17.1613C3 16.7742 3 10.0645 3 7M12 22C12.8182 22 13.5998 21.6698 15.1631 21.0095C19.0544 19.3657 21 18.5438 21 17.1613V7M12 22L12 11.3548"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.32592 9.69138L5.40472 8.27785C3.80157 7.5021 3 7.11423 3 6.5C3 5.88577 3.80157 5.4979 5.40472 4.72215L8.32592 3.30862C10.1288 2.43621 11.0303 2 12 2C12.9697 2 13.8712 2.4362 15.6741 3.30862L18.5953 4.72215C20.1984 5.4979 21 5.88577 21 6.5C21 7.11423 20.1984 7.5021 18.5953 8.27785L15.6741 9.69138C13.8712 10.5638 12.9697 11 12 11C11.0303 11 10.1288 10.5638 8.32592 9.69138Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 12L8 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 4L7 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h1 className="text-white">Projects</h1>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
