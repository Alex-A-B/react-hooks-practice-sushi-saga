import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer( { sushis, plateHandler }) {
//sushis is all 100 sushi
// sushi have ID 1-100
// only require 4 at a time to render
// filter/splice to new array?
  const [sushiID, setSushiID] = useState(1)
  


  const start = sushiID
  const end = (sushiID + 4)

  const beltDishes = sushis.filter((sushi) => {return sushi.id >= start && sushi.id < end})

  function handleMoreClick() {
    setSushiID(end)
  }

  // console.log(beltDishes)

  const renderSushi = beltDishes.map((dish) => {
    return (
      <Sushi
          key={dish.id}
          image={dish.img_url}
          name={dish.name}
          price={dish.price}
          plateHandler={plateHandler}
        />
    )
  })

  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {renderSushi}
      <MoreButton moreSushi={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
