import React from "react";

function Table({ plates = [] }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  function wallet() {
    if (!plates.length) {
      return 100
    } return 100 - plates.reduce((a, b) => a + b)
  } 

  return (
    <>
      <h1 className="remaining">
        You have: ${wallet()} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
