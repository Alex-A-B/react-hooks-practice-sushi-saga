import React from "react";

function Sushi( { image, name, price}) {
  return (
    <div className="sushi">
      <div className="plate" onClick={/* Give me a callback! */ null}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={image} 
            alt={name} 
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {/* Give me a name! */}{name} - ${/* Give me a price! */}{price}
      </h4>
    </div>
  );
}

export default Sushi;
