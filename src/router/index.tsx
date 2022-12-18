import { Route, Routes } from "react-router-dom";
import Page404 from "../pages/404";
import TodoPage from "../pages/todo";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
export default AppRouter;
