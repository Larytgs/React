import {useState} from 'react'

const EventHandlingExample = () => {

  //fazer uma função com um evento
  const handleClick = () => {
      alert ('Evento handleClick')
  }

  const handleGreet = (name) => {
    alert(`Ola ${name}`)
  }

  //pegar os valores do formulario
  const[name, setName] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault(); //para nao carregar a pagina

    alert (`Enviado ${name}`)
  }
  
  return (
    <div>
        <h2>EventHandling</h2>
        
        <button onClick={() => alert("Evento inline")}>Clique aqui</button> {/*evento inline */}
        <button onClick={handleClick}>Clique aqui 2</button> 

        <br />

        <button onClick={() => handleGreet("Ana")}>Dizer oi para Ana</button>
        <button onClick={() => handleGreet("Pedro")}>Dizer oi para Pedro</button>

        <br />

        <h3>Formulário:</h3>
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={name} //state de leitura
              onChange={(e) => setName(e.target.value)} //alteração de conteudo
              placeholder='Digite seu nome'
            />
            <input type="submit" value="Enviar"/>
        </form>

    </div>
  )
}

export default EventHandlingExample