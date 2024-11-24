import { GetServerSideProps } from "next";
import path from "path";
import fs from "fs";

interface Props {
  result: number;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const wasmPath = path.join(process.cwd(), "wasm", "add.wasm");
  const wasmBuffer = fs.readFileSync(wasmPath);

  // Compile and instantiate the WASM module
  const wasmModule = await WebAssembly.compile(wasmBuffer);
  const instance = await WebAssembly.instantiate(wasmModule);

  // Access the exported 'add' function and compute the result
  const { add } = instance.exports as { add: (a: number, b: number) => number };
  const result = add(10, 20);

  return {
    props: {
      result,
    },
  };
};

const Bitboard: React.FC<Props> = ({ result }) => {
  return (
    <div>
      <h1>Server-Side WebAssembly in TSX</h1>
      <p>The result of WASM computation is: {result}</p>
    </div>
  );
};

export default Bitboard;
