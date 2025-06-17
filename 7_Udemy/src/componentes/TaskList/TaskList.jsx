import Lista, { Title, Content } from "./style";

import PropTypes from "prop-types";

export default function TaskList({ title, onAddTask, tasks }) {
  // Nova função para chamar a tarefa
  const addTask = () => {
    onAddTask("Nova tarefa", "pendente");
  };

  return (
    <div className="bg-[#2C084C] p-1 rounded-md">
      <Lista>
        <Title>{title}</Title>
        <Content>
          {tasks.map((task) => {
            return <div key={task.id}>{task.title}</div>;
          })}
          <button className="bg-white p-1 mt-2" onClick={addTask}>
            Adicionar Tarefas
          </button>
        </Content>
      </Lista>
    </div>
  );
}

TaskList.prototype = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
