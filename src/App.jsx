import React from "react";
import Sidebar from "./components/Sidebar";
import Tile from "./components/Tile";
import background from "./images/bigstock-Astronaut-in-suit-against-blac-434152580 1.png"

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${background})`}}>
      <Sidebar />
      <button className="buypass rounded-full bg-yellow-400 text-white">Buy PASS</button>
      <button className="connect rounded-full bg-transparent border-yellow-400 text-white">Connect Wallet</button>
      <div className="align-middle">
      <h1 className="text-yellow-600 mx-auto my-0">EPOCH STALKING</h1>
      <div className="grid grid-cols-2 gap-2 ">
      <Tile title="PASS Price" value="$1520.33"/>
      <Tile title="PASS Price" value="$1520.33"/>
      <Tile title="PASS Price" value="$1520.33"/>
      <Tile title="PASS Price" value="$1520.33"/>
      <Tile title="PASS Price" value="$1520.33"/>
      <Tile title="PASS Price" value="$1520.33"/>
      <Tile title="PASS Price" value="$1520.33"/>
      <Tile title="PASS Price" value="$1520.33"/>
      </div>
      </div>
    </div>
  );
}

export default App;
