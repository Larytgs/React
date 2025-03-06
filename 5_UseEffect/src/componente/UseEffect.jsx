import {useState, useEffect} from 'react'

const UseEffect = () => {

  //sem dependencias
  useEffect(() => {
    console.log("Rodou o Effect 1")
  })

  //com dependencias vazias / ou array dep. vazio
  useEffect(() => {
    console.log('Rodou o Effect 2')
  }, [])

  //useState: ativa a reenderização
  const [count, setCount] = useState(0)

  //com dependencias
  useEffect(() =>{
    console.log('Rodou o Effect 3')
  }, [count]) //ele tem um estado

  return (
    <div>
        <h2>UseEffect</h2>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar contagem</button>
    </div>
  )
}

export default UseEffect