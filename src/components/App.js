import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import { useState } from "react";
import HogDetails from "./HogDetails";

function App() {
   const [showHogDetails, setShowHogDetails] = useState(false);
   const [chosenHog, setChosenHog] = useState("");
   const [filteredHogs, setFilteredHogs] = useState(hogs);

   function showDetails(hog) {
      console.log(hog);
      setShowHogDetails(!showHogDetails);
      setChosenHog(hog.name);
   }

   function showGreasedHogs() {
      const greasedHogs = filteredHogs.filter((hog) => {
         return hog.greased;
      });
      setFilteredHogs(greasedHogs);
   }

   function resetHogsFilter() {
      setFilteredHogs(hogs);
   }

   return (
      <div className="App">
         <Nav />
         <div style={{ marginBlock: "50px" }}>
            <h2>Filter Hogs:</h2>
            <div className="filter-btns" style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
               <button onClick={() => resetHogsFilter()}>Reset To Default</button>
               <button onClick={() => showGreasedHogs()}>Show Only Greased Hogs</button>
            </div>
         </div>
         <div className="ui grid container">
            {filteredHogs.map((hog, index) => {
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
                        {showHogDetails && hog.name === chosenHog && <HogDetails hog={hog} />}
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
}

export default App;
