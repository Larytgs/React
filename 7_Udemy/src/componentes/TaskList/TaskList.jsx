export default function TaskList(props) {
  return (
    <div className="bg-[#509bce] p-1">
      <div className="gap-4 bg-[#509bce]">
        <div className="p-1 font-bold bg-[#295470] text-white text-center rounded-md">
          {props.title}
        </div>
        <div className="py-4 px-1 flex columns-3 bg-[#509bce]"></div>
      </div>
    </div>
  );
}
