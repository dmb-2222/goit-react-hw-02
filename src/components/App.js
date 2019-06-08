import React from "react";
import Publications from "../publications.json";
import Counter from "../components/Counter/Counter";


const App = () => (
  <div>
    <Counter step={5} countPage={Publications.length}/>
    <Counter step={10} countPage={Publications.length}/>
  </div>
);

export default App;
