import { useState } from "react";
import "./App.css";
import NavBar from "./componentes/navBar/NavBar";
import TaskList from "./componentes/TaskList/TaskList";

// Criar uma tarefa
// const task = {
//   id: 0,
//   title: "Nova tarefa",
//   state: "Pendente", // Estado
// };

let idACC = 0;
// Gerar uma nova ID
const generateId = () => {
  idACC = idACC + 1;
  return idACC;
};

function App() {
  // Banco de dados sempre começa com o array vazio
  // Conteiner com todas as tarefas
  const [tasks, setTasks] = useState([]);

  // Adicionar uma nova tarefa, quando clicar no botão
  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state,
    };
    // Add essa nova tarefa na lista de tarefas
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
      // Retornando um novo estado, no final da lista
    });
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="w-[100%] max-w-[800px] m-auto p-2 grid sm:grid-cols-3 gap-2">
        <TaskList title="Pendente" onAddTask={addTask} tasks={tasks}></TaskList>
        {/* <TaskList title="Fazendo"></TaskList>
        <TaskList title="Completa"></TaskList> */}
      </div>
    </div>
  );
}

export default App;
