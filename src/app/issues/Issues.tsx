import Main from "@/components/Main";

import { useAppContext } from "@/context/AppContext";

const MainIssues = () => {
  const { filter } = useAppContext();
  return <Main filter={filter} />;
};

export default MainIssues;
