import React from "react";
import { Priority } from "./Priority";
import { Labels } from "./Labels";
import { BsCalendar2Event } from "react-icons/bs";
import { BsCalendar2X } from "react-icons/bs";
import Status from "./Status";

const Properties = ({ a }: any) => {
  // Helper function to parse the date string into a Date object
  const parseDate = (dateString: string) => {
    // Parse the date using the date-fns library or JavaScript Date object
    return new Date(dateString);
  };

  // Get the current date
  const currentDate = new Date();

  // Check if a.date is defined and is a future date
  const isFutureDate = a.date ? parseDate(a.date) > currentDate : false;

  return (
    <div className="flex h-full w-80 flex-col gap-4 bg-account p-4">
      <div>
        <h1>Properties</h1>
      </div>
      <div className="flex flex-col gap-3">
        {a.status === undefined ? <></> : <Status a={a} />}
        {a.priority === undefined ? <></> : <Priority a={a} />}
        <div className="flex flex-col gap-1 text-xs">
          <h6>Labels</h6>
          {a.labels === undefined ? <></> : <Labels a={a} />}
        </div>
        <div className="flex flex-col gap-2 text-xs">
          <h6>Due Date</h6>
          <div className="flex items-center gap-3 text-sm">
            {isFutureDate ? (
              <BsCalendar2Event size={15} className="text-improvement" />
            ) : (
              <BsCalendar2X size={15} className="text-bug" />
            )}
            <span>{a.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
