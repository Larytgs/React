import { SlArrowRight } from "react-icons/sl";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "./button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate(); //permite navegar entre páginas

  function onSeeDetailClick(tasks) {
    //criando uma função para chamar o titulo e a descrição
    const query = new URLSearchParams();
    query.set("title", tasks.title);
    query.set("description", tasks.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-3 p-6 bg-slate-200 shadow rounded-xl">
      {tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(tasks.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              tasks.isCompleted && "line-through"
            }`}
          >
            {tasks.title}
          </button>
          <Button onClick={() => onSeeDetailClick(tasks)}>
            <SlArrowRight />
          </Button>
          <Button onClick={() => onDeleteTaskClick(tasks.id)}>
            <FaRegTrashAlt />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
