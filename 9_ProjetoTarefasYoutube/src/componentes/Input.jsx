function Input(props) {
  //props é um objeto contendo as propriedades passadas para o componente.
  return (
    <input
      className="bg-slate-300 border-slate-300 text-gray-950 outline-slate-700 px-4 py-2 rounded-md"
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      //   {...props} //todas as props
      // Isso tornaria o componente mais flexível, permitindo que ele aceite qualquer propriedade do <input> padrão do HTML.
    />
  );
}

export default Input;
