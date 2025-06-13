import "./App.css";
import NavBar from "./componentes/navBar/NavBar";
import TaskList from "./componentes/TaskList/TaskList";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="w-[100%] max-w-[800px] m-auto p-2 grid sm:grid-cols-3 gap-2">
        <TaskList title="Pendente"></TaskList>
        <TaskList title="Fazendo"></TaskList>
        <TaskList title="Completa"></TaskList>
      </div>
    </div>
  );
}

export default App;
