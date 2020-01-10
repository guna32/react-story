import React, { useState } from "react";
import "./App.css";
import CountBanner from "./components/countBanner";
import Button from "./components/button";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <CountBanner count={count}></CountBanner>
      <Button onClick={() => setCount(count + 1)}></Button>
    </div>
  );
}

export default App;
