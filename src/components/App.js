import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";


function App() {
  const [getSushi, setGetSushi] = useState([])
  const [getPlates, setGetPlates] = useState([])
  const [walletAmount, setWalletAmount] = useState(100)

useEffect( () => {
fetch(API)
.then(response => response.json())
.then(data => setGetSushi(data))
.catch(error => console.log("server not working - start it up"))
}, [])

function handleGetPlates(price){
  setGetPlates([...getPlates, parseInt(price)])
  setWalletAmount(walletAmount - parseInt(price))
}

  return (
    <div className="app">
      <SushiContainer sushis={getSushi} plateHandler={handleGetPlates} wallet={walletAmount} />
      <Table plates={getPlates} wallet={walletAmount} />
    </div>
  );
}

export default App;
