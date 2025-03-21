import { useState } from "react"
import '../componente/TodoApp.css'

const TodoApp = () => {

    //Lista de tarefas
    const [todos, setTodos] = useState([])

    //Estado de texto de tarefas
    const [inputValue, setInputValue] = useState("")

    //Adicionar tarefas
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim() !== '') { //se tem algo digitado ali
            const newTodo = { //ele vai criar a lista
                id: Date.now(),
                text: inputValue,
            }

            setTodos((prevTodos) => [...prevTodos, newTodo]) //pegar o array de todos e colocar la dentro do newTodo 
            // Os 3 pontinhos é 'todos eles'

            setInputValue("") //Depois eu zero o input, para add outro
        }
    }

    //Excluir tarefa
    const deleteTask = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };//filter(): Cria uma nova lista contendo apenas os itens cujo id não corresponde ao que foi clicado.
      //setTodos(): Atualiza o estado removendo a tarefa selecionada.


  return (
    <div className="app-container">
        <h1 className="title">Lista de tarefas</h1>

        {/* Form para adicionar tarefas */}
        <form onSubmit={handleSubmit} className="form-container">
            <input 
                type="text" 
                className="input-field"
                placeholder="Adicione uma tarefa..."
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="add-button">Adicionar</button>
        </form>


        {/* Lista de tarefas */}
        {todos.length === 0 && <p className="empty">Não há tarefas.</p>}


        {/* Apresentação da lista */}
        <ul className="todo-list">
            {todos.map((todo) => {//pegar cada map
                return(
                    <li key={todo.id} className="todo-item">
                        {todo.text}
                        <button onClick={() => deleteTask(todo.id)} type="submit" className="delete" >❌</button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default TodoApp