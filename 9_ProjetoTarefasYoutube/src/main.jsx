import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./paginas/TaskPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Ola</div>,
  },
  {
    path: "/task", //o nome da pagina
    element: <TaskPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
  </StrictMode>
);
