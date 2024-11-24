export function Board() {
  const board_size = 8;
  const get_Cell_Color = (row: number, column: number) =>
    (row + column) % 2 == 0 ? "bg-white" : "bg-black";

  const cells = () => {
    const cells = [];
    for (let row = 0; row < board_size; row++) {
      for (let col = 0; col < board_size; col++) {
        const key: number = col + row * board_size;
        cells.push(
          <div
            key={key}
            className={`w-full h-full ${get_Cell_Color(row, col)} hover:bg-gray-400`}
          ></div>,
        );
      }
    }
    return cells;
  };
  return (
    <div
      className={`grid grid-cols-8 w-96 h-96 border-4 border-black position: relative,`}
    >
      {cells()}
    </div>
  );
}
