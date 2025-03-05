//Componente FILHO

import {useState} from "react";
//useState = os hooks, gerencia os estados

    const Gerenciamento = () => {
       
        //crio uma variavel de consulta, e uma alteração, inicio o hook
        const [count, setCount] = useState(0); //sintaxe base
        
        const Increment = () => { //um evento
            setCount((prevCount) => prevCount + 1)
            //setCount(count + 1)
            console.log(count)
        }

        //Sempre que vamos alterar o valor de algo => useState
        //Se é somente leitura =: var, state
        const [user, setUser] = useState({
            name: "Ana",
            age: 25,
            hobbies: ["Leitura", "Programação"] 
        })

        const updateUserAge = () => {
            setUser((prevUser) => ({
                ...prevUser,
                age: prevUser.age + 1,
            }))
        }

        return (
            <div>
                <h2>Contador:</h2>
                <p>Voce clicou {count} vezes.</p>
                <button onClick={Increment}>Incrementar</button>

                <br />

                <p>
                    Nome: {user.name} e idade: {user.age}
                </p>

                <br />
            
                <button onClick={updateUserAge}>Incrementar idade</button>
            </div>
        )
    };



export default Gerenciamento;