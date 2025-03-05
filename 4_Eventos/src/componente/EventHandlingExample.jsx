import {useState} from 'react'

const EventHandlingExample = () => {

  //fazer uma função com um evento
  const handleClick = () => {
      alert ('Testando o evento handleClick')
  }
  
  return (
    <div>
        <h2>EventHandlingExample</h2>
        
        <button onClick={() => alert("oi")}>Clique aqui</button> {/*evento inline */}
        <button onClick={handleClick}>Clique aqui 2</button> 

    </div>
  )
}

export default EventHandlingExample