import React from "react";
import Tile from "./Tile";

export default function Dashboard() {
  return (
    <div className="w-full">
    <div className="head flex justify-end w-full">
      <button className="rounded-full bg-yellow-400 text-white h-12 w-40 my-10">
        Buy PASS
      </button>
      <button className="connect rounded-full bg-transparent border-solid border-4 border-yellow-400 h-12 w-40 my-10 mx-10">
        Connect Wallet
      </button>
      </div>
      <div className="align-middle mx-28">
        <h1 className="text-yellow-600 text-center font-bold text-3xl m-12 mt-2">EPOCH STALKING</h1>
        <div className="grid grid-cols-2 gap-2 content-center">
          <Tile title="PASS Price" value="$1520.33" />
          <Tile title="APR  /  EPR" value="3280%     3%" />
          <Tile title="PASS Price" value="$1520.33" />
          <Tile title="PASS Price" value="$1520.33" />
          <Tile title="PASS Price" value="$1520.33" />
          <Tile title="PASS Price" value="$1520.33" />
          <Tile title="PASS Price" value="$1520.33" />
          <Tile title="PASS Price" value="$1520.33" />
        </div>
      </div>
    </div>
  );
}
