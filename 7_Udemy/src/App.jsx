import "./App.css";
import NavBar from "./componentes/navBar/NavBar";
import TaskList from "./componentes/TaskList/TaskList";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <TaskList title="Pendente"></TaskList>
      <TaskList title="Fazendo"></TaskList>
      <TaskList title="Completa"></TaskList>
    </div>
  );
}

export default App;
