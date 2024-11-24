import Bitboard from "./bitboard";
import { Board } from "./board";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="absolute ">
        <Bitboard result={5} />
        <Board />
      </div>
    </main>
  );
}
