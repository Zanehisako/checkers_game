"use client";
import React, { useState } from "react";

interface PieceProps {
  type: number;
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
        if ((i + j) % 2 != 0)
          pieces.push(
            Piece({ type: 0, source: "/pieces/black piece.png", x: i, y: j }),
          );
      }
    }
    return pieces;
  };
  const white_pieces = () => {
    const pieces = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 3; j++) {
        if ((i + j) % 2 != 0)
          pieces.push(
            Piece({ type: 1, source: "/pieces/white piece.png", x: i, y: j }),
          );
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
            className={`w-full h-full ${get_Cell_Color(row, col)} `}
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

export function Piece({ type, source, x, y }: PieceProps) {
  const [position_x, setX] = useState(x);
  const [position_y, setY] = useState(y);
  const [mouse_x, setMouseX] = useState(0);

  const handleMouseDown = (event: React.MouseEvent) => {
    const { clientX } = event;
    setMouseX(clientX);
  };

  const handleMouseUp = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    console.log("mouse X:", clientX);
    console.log("mouse Y:", clientY);
    if (clientX - mouse_x > 0) {
      setX(position_x + 1);
      type == 0 ? setY(position_y - 1) : setY(position_y + 1);
    } else {
      setX(position_x - 1);
      type == 0 ? setY(position_y - 1) : setY(position_y + 1);
    }
    console.log(position_x);
  };
  return (
    <img
      key={x + y * 8}
      src={source}
      className={`absolute w4 h4 cursor-pointer hover:scale-10 transition-transform duration-200`}
      style={{
        width: 45,
        transform: `translate(${position_x * 48}px,${position_y * 48}px)`,
      }}
      alt="piece"
      onMouseDown={handleMouseDown}
      onDragEnd={handleMouseUp}
    ></img>
  );
}
