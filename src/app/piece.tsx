interface PieceProps {
  source: string;
  x: number;
  y: number;
}
export function Piece({ source, x, y }: PieceProps) {
  return (
    <img
      src={source}
      className={`absolute w4 h4 cursor-pointer hover:scale-10 transition-transform duration-200`}
      style={{
        width: 45,
        transform: `translate(${x * 40 + 5}px,${y * 50 + 4}px)`,
      }}
      alt="piece"
    ></img>
  );
}
