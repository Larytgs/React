//Componente FILHO
import React from 'react'
import '../App.css'


const JSXExemplo = () => {

    //Podemos ter Variaveis
    const userName = 'Carlos';

    const user = {
        name: "Ana",
        lastName: "Souza",
    };

    //Podemos ter tbm Funçoes
    function getGreeting(name2){  //pegar saldação
        return `Ola ${name2}`; //usando crase ` para template literals
    }

    //Renderização condicional
    const userIsLoggedin = true;

    //Expressao lógica
    const userRole = 'admin';

    //Renderização de listas
    const users = [ //fazer um array de usuarios
        { id: 1, name: "Joao" },
        { id: 2, name: "Maria" },
        { id: 3, name: "Pedro" },
    ];

  return (
    <div>
        {/* BASICO */}
        <h2>Conteudo que o usuário vai ver</h2>
        
        <h3>Listando dados do usuário:</h3>
        <p>Seu nome é {userName}</p>
        <p>Usuário: {user.name} de {user.lastName}</p>

        <p>2 + 2 = {2 + 2}</p>  {/* Tudo que esta entre chaves, vai executar em JS */}

        <p>{getGreeting(userName)}</p>
        <p>{getGreeting("Laryssa")}</p>

        <br /><br />

        {/* DIFERENÇAS DO HTML */}
        <div className='alguma coisa'>Usando className</div> 
        <div className='teste'>teste2 - usando className</div>
        {/* no HTML é apenas o 'class' 
            no JSX tem que ser 'classNAme' */}

        <br /><br />

        <h3>onClick em camelCase:</h3>
        <button onClick={() => alert("Teste")}>Atributo, Clique em mim</button>

        <br /><br />

        <h3>RENDERIZAÇÃO CONDICIONAL</h3>
        {userIsLoggedin ? (<p>Esta logado</p>) : (<p>NAO esta logado</p>)}

        <h3>Expressao lógica</h3>
        <p>{userRole === "admin" && "Voce é um admin"}</p>

        <h3>RENDERIZAÇÃO DE LISTAS</h3>
        <div>
            <ul>
                {users.map((user) => ( 
                    <li key={user.id}> {/* cada item precisa de um identificado unico */}
                        {user.id} - {user.name}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default JSXExemplo