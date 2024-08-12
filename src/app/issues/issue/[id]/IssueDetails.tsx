/* eslint-disable react-hooks/exhaustive-deps */
import Notification from "@/components/Notification";
import Properties from "@/components/Properties";
import { useAppContext } from "@/context/AppContext";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useParams } from "react-router-dom";

const IssueDetails = () => {
  const { id } = useParams();
  // const selected = messages.find((item) => Number(item.id) === id);
  const { change, setChange } = useAppContext();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://simple-backend2.vercel.app/api/posts/${id}`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
        setChange("box");
      } catch (error) {
        if (error instanceof Error) {
          toast(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [id, change]);

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="flex items-center justify-center gap-1 bg-background p-1 py-2 text-sm font-semibold text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={19}
          height={19}
          fill={"none"}
        >
          <path
            d="M3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2.5V4.4M12 19.6V21.5M9.15 12H14.85M19.6 12H21.5M2.5 12H4.4M12 9.14999V14.85"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1 className="text-white">Issue</h1>
      </div>
      <div className="flex h-full flex-col overflow-hidden px-4 pb-4 text-sm font-semibold">
        <div className="flex h-full flex-col overflow-hidden rounded border border-border text-sm font-semibold">
          <div className="flex min-h-10 w-full items-center border-b border-border px-8">
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
          </div>
          <div className="flex h-full w-full overflow-auto">
            {loading ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-1 text-grey">
                Loading...
              </div>
            ) : (
              <>
                <Notification a={posts} />
                <Properties a={posts} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
