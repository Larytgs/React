import { useEffect, useState } from "react";
import AddTasks from "./componentes/AddTasks";
import Tasks from "./componentes/Tasks";
import "./index.css"; // Certifique-se de importar corretamente
import Title from "./componentes/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  //Salvar no localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); //toda vez que salvar uma tarefa ele salva no localStorage

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

  //monta a nova tarefa, pegando os paramentos que digitei, atualizando em baixo
  function onAddTaskSubmit(title, description) {
    const newTasks = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTasks]);
  }

  return (
    <>
      <div className="h-screen w-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px] space-y-4">
          <Title>Gerenciador de Tarefas</Title>
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
