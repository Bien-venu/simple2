/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface AppContextProps {
  data: any[];
  change: string;
  setChange: Dispatch<SetStateAction<string>>; // This should be a function
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  error: string | null;
  selectedStatus: string;
  setSelectedStatus: Dispatch<SetStateAction<string>>;
  filter: string;
  setFilter: (filter: string) => void;
  message: number | null;
  setMessage: Dispatch<SetStateAction<number | null>>;
  user: { token: string; loginTime: Date } | null;
  setUser: React.Dispatch<
    React.SetStateAction<{ token: string; loginTime: Date } | null>
  >;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any[]>([]);
  const [user, setUser] = useState<{ token: string; loginTime: Date } | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState("To Do");
  const [filter, setFilter] = useState('tasks');
  const [message, setMessage] = useState<number | null>(null);
  const [change, setChange] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://simple-backend2.vercel.app/api/posts`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An any error occurred",
        );
      } finally {
        setChange("data");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        change,
        setChange,
        error,
        filter,
        setFilter,
        message,
        setMessage,
        selectedStatus,
        setSelectedStatus,
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
