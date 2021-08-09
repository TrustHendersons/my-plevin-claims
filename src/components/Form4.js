import React from "react";

function Form4({ values, shouldDisplay }) {
  return (

    <div style={{ display: shouldDisplay ? "block" : "none" }}>

      <h3>Want to display all values here like below</h3>
      {Object.entries(values).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}

    </div>
  );
}

export default Form4;
