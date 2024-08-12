import MainHeader from "./MainHeader";
import Inbox from "./Inbox";
import InboxMessage from "./InboxMessage";

const Message = () => {
  return (
    <div className="flex h-full flex-1 flex-col overflow-hidden pb-2 pr-2">
      <MainHeader />
      <div className="flex h-full w-full overflow-hidden rounded border border-border bg-bgGray">
        <Inbox />
        <InboxMessage />
      </div>
    </div>
  );
};

export default Message;
