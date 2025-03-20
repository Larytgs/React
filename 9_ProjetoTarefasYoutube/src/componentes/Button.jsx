function Button(props) {
  //props é um objeto contendo as propriedades passadas para o componente.
  return (
    <button
      {...props}
      className={"bg-slate-400 text-left text-white p-2 rounded-md "}
    >
      {props.children}{" "}
      {/* O conteúdo do botão (texto, ícones, etc.) será definido pelo props.children */}
      {/* children representa tudo que for passado dentro da tag <Button>...</Button> */}
    </button>
  );
}

export default Button;
