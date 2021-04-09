import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogList from "./HogList";
import HogData from "./HogData";

function App() {
  return (
    <div className="App">
      <Nav />
      <HogList hogs={hogs}/>
      <HogData />
    </div>
  );
}

export default App;
