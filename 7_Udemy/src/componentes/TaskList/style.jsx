function Lista(props) {
  return <div className="gap-4 bg-[#509bce]">{props.children}</div>;
}

function Title(props) {
  return (
    <div className="p-1 font-bold bg-[#295470] text-white text-center rounded-md">
      {props.children}
    </div>
  );
}

function Content(props) {
  return (
    <div className="py-4 px-1 flex flex-col bg-[#509bce]">{props.children}</div>
  );
}

export default Lista;
export { Title, Content };
