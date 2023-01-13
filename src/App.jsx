// NPM Packages
import { useState } from "react";

// Project files
import data from "./data";
import Components from "./Components";
import Selector from "./Selector";

export default function App() {
  // Local state
  const [index, setIndex] = useState(0);

  // Methods
  function onChange(newIndex) {
    setIndex(newIndex);
  }

  return (
    <div className="App">
      <nav>
        <span>Choose the project version:</span>
        <Selector data={data} index={index} onChange={onChange} />
      </nav>
      <hr />
      <Components index={index} />
    </div>
  );
}
