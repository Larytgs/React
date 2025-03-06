import {useState, useEffect} from 'react'
//O useEffect é um hook do React que permite lidar com efeitos colaterais em componentes funcionais. É uma ferramenta fundamental para criar interfaces de usuário responsivas e atualizadas.

const UseEffect = () => {

  //sem dependencias
  useEffect(() => { //função anonima
    console.log("Rodou o Effect 1")
  }) //ele roda sempre q algo disperar qnd reenderizar o react


  //com dependencias vazias / ou array dep. vazio
  useEffect(() => { //função anonima
    console.log('Rodou o Effect 2')
  }, []) //só roda uma vez, só qnd carrega a pagina

  //useState: ativa a reenderização
  const [count, setCount] = useState(0)


  //com dependencias
  useEffect(() => { //função anonima
    console.log('Rodou o Effect 3')
  }, [count]) //ele roda só qnd tem uma mudança no estado

  return (
    <div>
        <h2>UseEffect</h2>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar contagem</button>
    </div>
  )
}

export default UseEffect