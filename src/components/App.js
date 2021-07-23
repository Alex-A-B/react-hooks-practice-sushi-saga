import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";


function App() {
  const [getSushi, setGetSushi] = useState([])
  const [getPlates, setGetPlates] = useState([])

useEffect( () => {
fetch(API)
.then(response => response.json())
.then(data => setGetSushi(data))
.catch(error => console.log("server not working - start it up"))
}, [])

function handleGetPlates(price){
  console.log(price)
  setGetPlates([...getPlates])
}

  return (
    <div className="app">
      <SushiContainer sushis={getSushi} plateHandler={handleGetPlates} />
      <Table plates={getPlates} />
    </div>
  );
}

export default App;
