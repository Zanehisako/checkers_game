import Bitboard from "./bitboard";
import { Board } from "./board";
import { Piece } from "./piece";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="absolute ">
        <Bitboard result={5} />
        <Piece source="/pieces/black piece.png" x={4} y={4} />
        <Piece source="/pieces/white piece.png" x={4} y={54} />
        <Board />
      </div>
    </main>
  );
}
