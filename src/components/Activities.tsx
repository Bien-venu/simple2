/* eslint-disable @typescript-eslint/no-explicit-any */

import { Key } from "react";

// Function to calculate days ago
const calculateDaysAgo = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date();
  const timeDiff = today.getTime() - date.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  return daysDiff;
};

const Activities = ({ message }: any) => {
  const userInitials = message?.user?.slice(0, 2) || "N/A";
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-base">Activity</h1>
        <div className="flex">
          <div className="mr-[-10px] flex h-6 w-6 items-center justify-center rounded-full border border-bgGray bg-bug text-xs uppercase">
            {userInitials}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {message.comments === undefined ? (
          <>What is wrong</>
        ) : (
          message.comments.map((activity: any, index: number) => {
            const daysAgo = calculateDaysAgo(activity.createdAt);
            return (
              <div key={index} className="flex flex-col items-start gap-2">
                <div className="flex w-full flex-col items-start gap-2 rounded border border-border p-3 px-4">
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-bgGray bg-bug text-xs uppercase">
                        {activity.userId.name.slice(0, 2)}
                      </div>
                      <h1 className="text-white">{activity.userId.name}</h1>
                      <p className="text-grey">{daysAgo} days ago</p>
                    </div>
                    <div className="ml-8 flex items-center gap-2 text-xs text-grey">
                      <p>{activity.message}</p>
                    </div>
                  </div>
                  {activity.image.length != 0 && (
                    <div className="flex flex-wrap gap-2">
                      {activity.image.map((image: string | undefined, index: Key | null | undefined) => (
                        <div className="flex h-64 w-64" key={index}>
                          <img
                            src={image}
                            alt={image}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex h-5 w-1 border-l-2 border-dotted border-border"></div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Activities;
