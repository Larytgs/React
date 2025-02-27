//Componente PAI
import './App.css'

//Importar o componente FILHO
import ComponenteFuncional from './componentes/ComponenteFuncnional';
import ClassComponent from './componentes/ClassComponent';

function App() {
  return (
    <>
    <h1>Helloo Word</h1> 
    {/* utilizando o componente importado no jsx */}
    <ComponenteFuncional></ComponenteFuncional>
    <ClassComponent></ClassComponent>
    </>
  )
}

//Sempre temos que exportar 
export default App;
