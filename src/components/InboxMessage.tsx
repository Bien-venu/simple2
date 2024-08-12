import { useAppContext } from "@/context/AppContext";
import Notification from "./Notification";
import Properties from "./Properties";
import { useEffect, useState } from "react";

const InboxMessage = () => {
  const { message, change, setChange } = useAppContext();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://simple-backend2.vercel.app/api/posts/${message}`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok, ");
        }
        const data = await response.json();
        setPosts(data);
        setChange("inbox");
        console.log(error);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message, change]);

  if (loading) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-1 text-grey">
        Loading...
      </div>
    );
  }

  if (message === null) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-1 text-grey">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={100}
            height={100}
            fill={"none"}
          >
            <path
              d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.5 13.5H16.5743C15.7322 13.5 15.0706 14.2036 14.6995 14.9472C14.2963 15.7551 13.4889 16.5 12 16.5C10.5111 16.5 9.70373 15.7551 9.30054 14.9472C8.92942 14.2036 8.26777 13.5 7.42566 13.5H2.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <h1 className="text-sm text-white">Inbox</h1>
        </div>
        <p className="text-xs font-semibold">No unread notifications</p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col text-sm font-semibold">
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
      <div className="flex h-full overflow-hidden">
        <Notification a={posts} />
        <Properties a={posts} />
      </div>
    </div>
  );
};

export default InboxMessage;
