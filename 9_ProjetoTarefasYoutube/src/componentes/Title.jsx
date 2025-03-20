function Title(props) {
  //props é um objeto contendo as propriedades passadas para o componente.
  return (
    <h1 className="text-4xl text-slate-300 font-bold text-center">
      {props.children}
    </h1>
  );
}

export default Title;
