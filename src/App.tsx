import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthLayout from "./app/(auth)/layout";
import Login from "./app/(auth)/Login";
import Register from "./app/(auth)/Register";
import MainLayout from "./app/layout";
import IssuesLayout from "./app/issues/layout";
import MainIssues from "./app/issues/Issues";
import IssueDetails from "./app/issues/issue/[id]/IssueDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="/signup" element={<Register />} />
          </Route>
          <Route element={<IssuesLayout />}>
            <Route path="/issues" element={<MainIssues />} />
            <Route path="/issue/:id" element={<IssueDetails />} />
            
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
