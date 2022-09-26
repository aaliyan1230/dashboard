import React from "react";
import Sidebar from "./components/Sidebar";
import Tile from "./components/Tile";
import background from "../public/bigstock-Astronaut-in-suit-against-blac-434152580 1.png"

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${background})`}}>
      <Sidebar />
      <button >Buy PASS</button>
      <button>Connect Wallet</button>
      <h1>EPOCH STALKING</h1>
      <div>
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
  );
}

export default App;
