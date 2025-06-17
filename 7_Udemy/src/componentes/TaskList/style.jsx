function Lista(props) {
  return <div className="gap-4 text-center">{props.children}</div>;
}

function Title(props) {
  return (
    <div className="p-1 font-bold bg-[#601F9E] text-white text-center rounded-t-md">
      {props.children}
    </div>
  );
}

function Content(props) {
  return (
    <div className="py-4 px-1 flex flex-col bg-[#A054DE] rounded-b-md">
      {props.children}
    </div>
  );
}

export default Lista;
export { Title, Content };
