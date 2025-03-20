function Title(props) {
  return (
    <h1 className="text-4xl text-slate-300 font-bold text-center">
      {props.children}
    </h1>
  );
}

export default Title;
