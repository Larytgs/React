import AddTasks from "./componentes/AddTask";
import Tasks from "./componentes/tasks";

function App() {
  return (
    <>
      <h1 className="text-red-500 text-3xl">Gerenciador de Tarefas</h1>
      <Tasks></Tasks>
      <AddTasks></AddTasks>
    </>
  );
}

export default App;
