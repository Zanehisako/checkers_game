interface PieceProps {
  source: string;
  x: number;
  y: number;
}
export function Board() {
  const board_size = 8;
  const get_Cell_Color = (row: number, column: number) =>
    (row + column) % 2 == 0 ? "bg-white" : "bg-black";

  const black_pieces = () => {
    const pieces = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 5; j < 8; j++) {
        if ((i + j) % 2 == 0)
          pieces.push(Piece({ source: "/pieces/black piece.png", x: i, y: j }));
      }
    }
    return pieces;
  };
  const white_pieces = () => {
    const pieces = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 3; j++) {
        if ((i + j) % 2 != 0)
          pieces.push(Piece({ source: "/pieces/white piece.png", x: i, y: j }));
      }
    }
    return pieces;
  };
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
      {black_pieces()}
      {white_pieces()}
    </div>
  );
}

export function Piece({ source, x, y }: PieceProps) {
  return (
    <img
      key={x + y * 8}
      src={source}
      className={`absolute w4 h4 cursor-pointer hover:scale-10 transition-transform duration-200`}
      style={{
        width: 45,
        transform: `translate(${x * 48}px,${y * 48}px)`,
      }}
      alt="piece"
    ></img>
  );
}
