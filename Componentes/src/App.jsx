//Componente PAI
import './App.css'

//Importar o componente FILHOS
import ComponenteFuncional from './componentes/ComponenteFuncnional';
import ClassComponent from './componentes/ClassComponent';
import PropsComponent from './componentes/PropsComponent';

function App() {
  return (
    <>
    <h1>Helloo Word</h1> 
    {/* utilizando o componente importado no jsx */}
    <ComponenteFuncional></ComponenteFuncional>
    <ClassComponent></ClassComponent>
    
    {/* componente com dados */}
    <PropsComponent nome = 'Laryssa' idade = {26} ></PropsComponent>
    </>
  )
}

//Sempre temos que exportar 
export default App;
