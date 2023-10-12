import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import { useState } from "react";

function App() {
  const [showHogDetails, setShowHogDetails] = useState(false);
  const [chosenHog, setChosenHog] = useState("");

  function showDetails(hog) {
    console.log(hog);
    setShowHogDetails(!showHogDetails);
    setChosenHog(hog.name);
  }

  return (
    <div className="App">
      <Nav />
      <div className="ui grid container">
        {hogs.map((hog, index) => {
          return (
            <div
              className="ui eight wide column "
              key={index}
              onClick={() => {
                showDetails(hog);
              }}
            >
              <div className="pigTile">
                <img src={hog.image} alt="" style={{ width: "100%" }} />
                <h2>{hog.name}</h2>
                {showHogDetails && hog.name === chosenHog && (
                  <div className="hogDetails">
                    <h3>
                      Highest Medal Achieved :{" "}
                      <em>{hog["highest medal achieved"]}</em>
                    </h3>
                    <h3>
                      Specialty : <em>{hog.specialty}</em>
                    </h3>
                    <h3>
                      Greased : <em>{hog.greased}</em>
                    </h3>
                    <h3>
                      Weight : <em>{hog.weight}</em>
                    </h3>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
