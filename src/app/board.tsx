"use client";
import React, { useState } from "react";
import { Piece } from "./piece";
import { Cell } from "./cells";

export function Board() {
  const [cellIndex, SetCell] = useState(0);
  const board_size = 8;
  const black_pieces = () => {
    const pieces = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 5; j < 8; j++) {
        if ((i + j) % 2 != 0)
          pieces.push(
            Piece({
              Selectedindex: cellIndex,
              type: 0,
              source: "/pieces/black piece.png",
              x: i,
              y: j,
              onSelect: SetCell,
            }),
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
            Piece({
              Selectedindex: cellIndex,
              type: 1,
              source: "/pieces/white piece.png",
              x: i,
              y: j,
              onSelect: SetCell,
            }),
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
          Cell({
            key: key,
            isSelected: cellIndex,
            type: (row + col) % 2 == 0 ? 1 : 0,
          }),
        );
      }
    }
    return cells;
  };
  console.log("index of the board is:", cellIndex);
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
