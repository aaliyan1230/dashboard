import React from "react";
import Tile from "./Tile";

export default function Dashboard() {
  return (
    <div className="">
      <button className="buypass rounded-full bg-yellow-400 text-white">
        Buy PASS
      </button>
      <button className="connect rounded-full bg-transparent border-yellow-400 text-white">
        Connect Wallet
      </button>
      <div className="align-middle">
        <h1 className="text-yellow-600 align-middle ">EPOCH STALKING</h1>
        <div className="grid grid-cols-2 gap-2 ">
          <Tile title="PASS Price" value="$1520.33" />
          <Tile title="PASS Price" value="$1520.33" />
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
