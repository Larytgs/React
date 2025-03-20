import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//createBrowserRouter: Cria um roteador baseado em histórico de navegação do navegador.
//RouterProvider: Fornece o roteador criado para a aplicação.
import TaskPage from "./paginas/TaskPage.jsx";
//TaskPage: Importa a página que será exibida quando o usuário acessar a rota correspondente.

const router = createBrowserRouter([
  {
    path: "/", //O path define o caminho da URL
    element: <App />, //element define o componente que será renderizado
  },
  {
    path: "/task", //o nome da pagina Renderiza o componente <TaskPage /> (página de tarefas).
    element: <TaskPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />{" "}
    {/* Passa o roteador criado para a aplicação, permitindo a navegação entre páginas. */}
    {/* <App /> */}
  </StrictMode>
);
