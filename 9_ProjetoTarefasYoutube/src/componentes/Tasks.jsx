import { SlArrowRight } from "react-icons/sl";
import { FaRegTrashAlt } from "react-icons/fa";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <ul className="space-y-3 p-6 bg-slate-200 shadow">
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
          <button className="bg-slate-400 text-white p-2 rounded-md ">
            <SlArrowRight />
          </button>
          <button
            onClick={() => onDeleteTaskClick(tasks.id)}
            className="bg-slate-400 text-white p-2 rounded-md "
          >
            <FaRegTrashAlt />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
