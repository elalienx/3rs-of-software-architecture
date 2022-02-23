// NPM Packages
import { useState } from "react";

// Project files
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
      <Selector index={index} onChange={onChange} />
      <hr />
      <Components index={index} />
    </div>
  );
}
