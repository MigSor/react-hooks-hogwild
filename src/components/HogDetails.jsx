import React from "react";

function HogDetails({ hog }) {
  return (
    <div className="hogDetails">
      <h3>
        Highest Medal Achieved : <em>{hog["highest medal achieved"]}</em>
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
  );
}

export default HogDetails;
