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
                <li key={todo.id} className="todo-item">
                    {todo.text}
                </li>
            })}
        </ul>
    </div>
  )
}

export default TodoApp