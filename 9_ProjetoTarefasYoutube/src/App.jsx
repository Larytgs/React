import { useState } from "react";
import AddTasks from "./componentes/AddTasks";
import Tasks from "./componentes/Tasks";
import "./index.css"; // Certifique-se de importar corretamente

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Para se tornar um dev",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Ingles",
      description: "Para se tornar fluente",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Matematica",
      description: "Para se tornar um dev Full stack",
      isCompleted: false,
    },
  ]);

  //uma função que altera o estado d euma tarefa
  function onTaskClick(tasksId) {
    //vai ser executada qnd clicar em um titulo
    const newTasks = tasks.map((task) => {
      //Preciso atualizar essa tarefa
      if (task.id === tasksId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      //Nao preciso atualizar essa tarefa
      return task;
    });

    setTasks(newTasks); //atualizar a nova lista
  }

  function onDeleteTaskClick(tasksId) {
    const newTasks = tasks.filter((task) => task.id !== tasksId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTasks = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...Tasks, newTasks]);
  }

  return (
    <>
      <div className="h-screen w-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px] space-y-4">
          <h1 className="text-4xl text-slate-300 font-bold text-center">
            Gerenciador de Tarefas
          </h1>
          <AddTasks onAddTaskSubmit={onAddTaskSubmit}></AddTasks>
          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            onDeleteTaskClick={onDeleteTaskClick}
          ></Tasks>
        </div>
      </div>
    </>
  );
}

export default App;
