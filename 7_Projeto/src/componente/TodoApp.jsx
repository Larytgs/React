import { useState } from "react"
import '../componente/TodoApp.css'

const TodoApp = () => {

    //Lista de tarefas
    const [todos, setTodos] = useState([])

    //Estado de texto de tarefas
    const [inputValue, setInputValue] = useState("")

    //Adicionar tarefas
    const handleSubmit = (e) =>{
        e.prevenDefault;

        if(inputValue.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                text: inputValue
            }

            setTodos((prevTodos) => [...prevTodos, newTodo])
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
    </div>
  )
}

export default TodoApp