/* eslint-disable @next/next/no-img-element */
import { MdSwapHorizontalCircle } from "react-icons/md";
import { RiProgress1Line } from "react-icons/ri";

const iconMapping: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  MdSwapHorizontalCircle,
  RiProgress1Line,
  // Add other mappings here
};

function getIconComponent(
  iconName: string,
): React.ComponentType<React.SVGProps<SVGSVGElement>> | null {
  return iconMapping[iconName] || null;
}

// Function to calculate days ago
const calculateDaysAgo = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date();
  const timeDiff = today.getTime() - date.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  return daysDiff;
};

const Activities = ({ message }: any) => {
  const getIconClassName = (iconName: string) => {
    switch (iconName) {
      case "MdSwapHorizontalCircle":
        return "text-grey";
      case "RiProgress1Line":
        return "text-inprogress";
      default:
        return "";
    }
  };

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
            const IconComponent = getIconComponent(activity.icon);
            const daysAgo = calculateDaysAgo(activity.createdAt);
            return (
              <div key={index} className="flex flex-col items-start gap-2">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-bgGray bg-bug text-xs uppercase">
                      {activity.userId.name.slice(0, 2)}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-grey">
                      <h1 className="text-white">{activity.userId.name}</h1>
                      <p>{activity.message}</p>
                      <span>.</span>
                      <p>{daysAgo} days ago</p>
                    </div>
                  </div>
                  {activity.image.length != 0 && (
                    <div className="flex h-64 w-64">
                      <img
                        src={activity.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
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
