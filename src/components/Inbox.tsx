import Cookies from "js-cookie";
import { useAppContext } from "@/context/AppContext";

const Inbox = () => {
  const { message, setMessage, data, loading, setLoading } = useAppContext();
  const username = Cookies.get("username"); // Use Cookies to get the value
  const email = Cookies.get("email"); // Use Cookies to get the value

  // Filter data to include only messages where email matches m.user
  const filteredData = data.filter((m) => m.user === email);

  return (
    <div className="flex w-96 flex-col gap-4 border-r border-border">
      <div className="flex h-10 w-full items-center border-b border-border px-4">
        Inbox
      </div>
      {loading ? (
        <div className="flex flex-1 items-center justify-center text-sm font-medium text-grey">
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          {filteredData.length === 0 ? (
            <div className="flex flex-1 items-center justify-center text-sm font-medium text-grey">
              <h1>No task available</h1>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {filteredData.map((m, index) => (
                <div
                  className={` ${message === m._id && "bg-hover"} mx-2 flex items-center justify-between rounded p-2 hover:bg-hover`}
                  key={index}
                  onClick={() => setMessage(m._id)}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bug text-xs uppercase">
                      {m.user.slice(0, 2)}
                    </div>
                    <div className="flex flex-col text-grey">
                      <div className="flex gap-2 text-sm">
                        <h1 className="font-medium uppercase">{m.project}</h1>
                        <h2 className="font-semibold">{m.task}</h2>
                      </div>
                      <h6 className="text-xs font-medium">
                        Admin assigned to you
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Inbox;
