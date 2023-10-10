import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="ui grid container">
        {hogs.map((hog, index) => {
          return (
            <div className="ui eight wide column " key={index}>
              <div className="pigTile">
                <img src={hog.image} alt="" style={{ width: "100%" }} />
                <h3>{hog.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
