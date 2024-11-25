interface cell {
  key: number;
  isSelected: boolean;
  type: number;
}
export function Cell({ key, isSelected, type }: cell) {
  const get_Cell_Color = (type: number) =>
    type == 1 ? "bg-white" : "bg-black";
  return (
    <div
      key={key}
      className={
        isSelected
          ? `w-full h-full  ${get_Cell_Color(type)} border-2 border-lime-400`
          : `w-full h-full  ${get_Cell_Color(type)}`
      }
    ></div>
  );
}
