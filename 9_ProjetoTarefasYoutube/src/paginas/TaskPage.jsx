import { FaChevronLeft } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../componentes/Title";

function TaskPage() {
  const [searchParams] = useSearchParams(); //permite gerenciar os parâmetros de pesquisa de uma URL.
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen p-6 bg-slate-500">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)} //para voltar a pagina
            className="absolute left-0 top-0 text-slate-100 bg-transparent"
          >
            <FaChevronLeft></FaChevronLeft>
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h1 className="text-xl font-bold text-black">{title}</h1>
          <h2 className="text-black">{description}</h2>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
