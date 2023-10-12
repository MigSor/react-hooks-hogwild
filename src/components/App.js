import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import { useState } from "react";
import HogDetails from "./HogDetails";
import "./App.css";

function App() {
   const [showHogDetails, setShowHogDetails] = useState(false);
   const [chosenHog, setChosenHog] = useState("");
   const [filteredHogs, setFilteredHogs] = useState(hogs);
   const [inputValue, setInputValue] = useState("");

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

   function onChange(e) {
      const searchHogs = e.target.value;
      const filteredSearchHogs = hogs.filter((hog) => {
         let eachHog = hog.name.toLowerCase();
         return eachHog.includes(searchHogs.toLowerCase());
      });
      setInputValue(e.target.value);
      const searchedHog = searchHogs.length ? filteredSearchHogs : hogs;
      setFilteredHogs(searchedHog);
   }

   return (
      <div className="App">
         <Nav />
         <div style={{ marginBlock: "50px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h2>Filter Hogs:</h2>
            <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
               <label htmlFor="search" style={{ fontSize: "20px", verticalAlign: "baseline", paddingTop: "1%" }}>
                  Search for Hogs
               </label>
               <input id="search" type="text" value={inputValue} onChange={(e) => onChange(e)} />
            </div>
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
