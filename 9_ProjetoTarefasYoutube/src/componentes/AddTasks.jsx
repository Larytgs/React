function AddTasks() {
  return (
    <div className="space-y-3 p-6 bg-slate-200 shadow flex flex-col rounded-xl">
      <input
        className="bg-slate-300 border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite o titulo da tarefa"
      />
      <input
        className="bg-slate-300 border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite a descrição da tarefa"
      />
      <button className="bg-slate-500 text-white px-4 py-2 rounded-md">
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
