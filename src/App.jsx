import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
// import background from "./images/bigstock-Astronaut-in-suit-against-blac-434152580.png"

function App() {
  return (
    <div className="App flex text-white" style={{backgroundImage: "url(/images/bigstock-Astronaut-in-suit-against-blac-434152580.png)"}} >
      <Sidebar />
      <Dashboard/>
    </div>
  );
}

export default App;
