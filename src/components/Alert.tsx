/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { format } from "date-fns";
import Cookies from "js-cookie";
import {
  RiProgress1Line,
  RiProgress8Line,
  RiProgress6Line,
  RiProgress7Line,
  RiProgress4Line,
} from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Calendars } from "./Calendar";
import axios from "axios";
import { useState } from "react";
import { Circle, HelpCircle } from "lucide-react";
import { IoIosCloseCircle } from "react-icons/io";
import { RxDotsHorizontal } from "react-icons/rx";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { BiSignal2, BiSignal3, BiSignal4 } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";
import { toast } from "sonner";
import { useAppContext } from "@/context/AppContext";

const labels = [
  {
    value: "improvement",
    label: "Improvement",
    icon: <FaCircle className="text-blue-500 inline-block" />,
  },
  {
    value: "bug",
    label: "Bug",
    icon: <FaCircle className="text-red-500 inline-block" />,
  },
  {
    value: "feature",
    label: "Feature",
    icon: <FaCircle className="text-green-500 inline-block" />,
  },
];

const frameworks = [
  {
    value: "backlog",
    label: "Backlog",
    icon: <HelpCircle className="text-gray-500 inline-block" />,
  },
  {
    value: "todo",
    label: "Todo",
    icon: <Circle className="text-gray-500 inline-block" />,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: <RiProgress1Line className="text-yellow-500 inline-block" />,
  },
  {
    value: "halfly done",
    label: "Halfly Done",
    icon: <RiProgress4Line className="text-orange-500 inline-block" />,
  },
  {
    value: "conflict",
    label: "Conflict",
    icon: <RiProgress6Line className="text-red-500 inline-block" />,
  },
  {
    value: "complete",
    label: "Completed",
    icon: <RiProgress7Line className="text-green-500 inline-block" />,
  },
  {
    value: "review",
    label: "In Review",
    icon: <RiProgress7Line className="text-blue-500 inline-block" />,
  },
  {
    value: "done",
    label: "Done",
    icon: <RiProgress8Line className="text-teal-500 inline-block" />,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: <IoIosCloseCircle className="text-gray-500 inline-block" />,
  },
];

const priorities = [
  {
    value: "no priority",
    label: "No priority",
    icon: <RxDotsHorizontal className="text-gray-500 inline-block" />,
  },
  {
    value: "urgent",
    label: "Urgent",
    icon: <BsFillExclamationSquareFill className="text-red-500 inline-block" />,
  },
  {
    value: "high",
    label: "High",
    icon: <BiSignal4 className="text-orange-500 inline-block" />,
  },
  {
    value: "medium",
    label: "Medium",
    icon: <BiSignal3 className="text-yellow-500 inline-block" />,
  },
  {
    value: "low",
    label: "Low",
    icon: <BiSignal2 className="text-green-500 inline-block" />,
  },
];

export function Alert() {
  const { setChange } = useAppContext(); // Ensure this is imported correctly

  const [formData, setFormData] = useState({
    name: "",
    user: "",
    project: "",
    task: "",
    status: "",
    priority: "",
    labels: "",
    date: "",
    userId: "66b6a8bf24aea51508b8ee55",
    about: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: date ? format(date, "yyyy-MM-dd") : "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("FormData being sent:", formData);

    try {
      // Get token from cookies
      const token = Cookies.get("token");

      // Send the POST request with the token in the headers
      await axios.post(`http://localhost:3001/api/posts`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setChange("create");
      // Handle success
      toast.success("Task created successfully!");
    } catch (error: any) {
      // Handle different error statuses and show appropriate messages
      if (error.response?.status === 401) {
        toast.error("Unauthorized. Please log in again.");
      } else if (error.response?.status === 400) {
        toast.error("Bad request. Please check your input.");
      } else if (error.response?.status === 500) {
        toast.error("Server error. Please try again later.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={17}
          height={17}
          fill={"none"}
          className="cursor-pointer"
        >
          <path
            d="M16.2141 4.98239L17.6158 3.58063C18.39 2.80646 19.6452 2.80646 20.4194 3.58063C21.1935 4.3548 21.1935 5.60998 20.4194 6.38415L19.0176 7.78591M16.2141 4.98239L10.9802 10.2163C9.93493 11.2616 9.41226 11.7842 9.05637 12.4211C8.70047 13.058 8.3424 14.5619 8 16C9.43809 15.6576 10.942 15.2995 11.5789 14.9436C12.2158 14.5877 12.7384 14.0651 13.7837 13.0198L19.0176 7.78591M16.2141 4.98239L19.0176 7.78591"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create a task</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="mt-4 flex w-full flex-col gap-4 text-sm">
              <div className="flex w-full gap-4 text-sm">
                <div className="flex w-full flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={handleChange}
                      value={formData.name}
                      className="border-gray-300 rounded-md border border-border bg-background px-4 py-3 outline-none"
                      placeholder="Task Name"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="user">Assign To</label>
                    <input
                      id="user"
                      name="user"
                      type="text"
                      onChange={handleChange}
                      value={formData.user}
                      className="border-gray-300 rounded-md border border-border bg-background px-4 py-3 outline-none"
                      placeholder="Assign To"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="project">Project</label>
                    <input
                      id="project"
                      name="project"
                      type="text"
                      onChange={handleChange}
                      value={formData.project}
                      className="border-gray-300 rounded-md border border-border bg-background px-4 py-3 outline-none"
                      placeholder="Project"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="task">Task</label>
                    <input
                      id="task"
                      name="task"
                      type="text"
                      onChange={handleChange}
                      value={formData.task}
                      className="border-gray-300 rounded-md border border-border bg-background px-4 py-3 outline-none"
                      placeholder="Task Description"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="status">Status</label>
                    <select
                      id="status"
                      name="status"
                      onChange={handleSelectChange}
                      value={formData.status}
                      className="border-gray-300 rounded-md border border-border bg-background px-4 py-3 outline-none"
                      required
                    >
                      {frameworks.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="priority">Priority</label>
                    <select
                      id="priority"
                      name="priority"
                      onChange={handleSelectChange}
                      value={formData.priority}
                      className="border-gray-300 rounded-md border border-border bg-background px-4 py-3 outline-none"
                      required
                    >
                      {priorities.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="labels">Labels</label>
                    <select
                      id="labels"
                      name="labels"
                      onChange={handleSelectChange}
                      value={formData.labels}
                      className="border-gray-300 rounded-md border border-border bg-background px-4 py-3 outline-none"
                      required
                    >
                      {labels.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="date">Due Date</label>
                    <Calendars
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="about">About</label>
                    <textarea
                      id="about"
                      name="about"
                      onChange={handleChange}
                      value={formData.about}
                      className="rounded-md border border-border bg-background px-4 py-2 outline-none"
                      placeholder="Details about the task"
                      rows={5}
                      // cols={40}
                      required
                    />
                  </div>
                </div>
              </div>
              <AlertDialogFooter className="flex items-center">
                <AlertDialogCancel className="border-none bg-btn">
                  Cancel
                </AlertDialogCancel>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="border border-border text-white"
                >
                  {isSubmitting ? "Creating..." : "Create Task"}
                </Button>
              </AlertDialogFooter>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
