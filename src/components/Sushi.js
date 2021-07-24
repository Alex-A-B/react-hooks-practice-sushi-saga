import React, { useState } from "react";

function Sushi( { image, name, price, plateHandler }) {
  const [canEat, setCanEat] = useState(true)
  
  function handleEatDish() {
    plateHandler(`${price}`)
    setCanEat(false)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatDish}>
        {/* Tell me if this sushi has been eaten! */}
        {canEat === false ? null : (
          <img
            src={image} 
            alt={name} 
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
