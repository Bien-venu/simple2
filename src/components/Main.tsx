/* eslint-disable @typescript-eslint/no-explicit-any */
import Message from "./Message";
import Issues from "./Issues";
import Tasks from "./Tasks";
import Active from "./Active";
import Backlog from "./Backlog";
import Project from "./Project";

const Main = ({ filter }: any) => {
  
  if (filter === "inbox") {
    return <Message />;
  }

  if (filter === "issues") {
    return <Issues />;
  }

  if (filter === "tasks") {
    return <Tasks />;
  }

  if (filter === "active") {
    return <Active />;
  }

  if (filter === "backlog") {
    return <Backlog />;
  }

  if (filter === "issue") {
    return <Tasks />;
  }
  if (filter === "project") {
    return <Project />;
  }

  return <div className="flex-1 bg-bgGray h-full">{filter}</div>;
};

export default Main;
