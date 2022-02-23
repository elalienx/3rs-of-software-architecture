import { useState } from "react";
import ReadableBad from "./1-readable/bad/Project";
import ReadableGood from "./1-readable/good/Project";
import ReusableBad from "./2-reusable/bad/Project";
import ReusableGood from "./2-reusable/good/Project";
import RefactorableBad from "./3-refactorable/bad/Project";
import RefactorableGood from "./3-refactorable/good/Project";

export default function App() {
  /**
   * Instructions:
   * Comment out all components and only leave the one you want to view.
   */

  // Local state
  const [index, setIndex] = useState(0);

  // Properties
  const componentList = [
    <ReadableBad />,
    <ReadableGood />,
    <ReusableBad />,
    <ReusableGood />,
    <RefactorableBad />,
    <RefactorableGood />,
  ];

  return (
    <div className="App">
      <nav>
        Readable:
        <button onClick={() => setIndex(0)}>Bad</button>
        <button onClick={() => setIndex(1)}>Good</button>
        Reutilizable:
        <button onClick={() => setIndex(2)}>Bad</button>
        <button onClick={() => setIndex(3)}>Good</button>
        Refactorable:
        <button onClick={() => setIndex(4)}>Bad</button>
        <button onClick={() => setIndex(5)}>Good</button>
      </nav>
      {componentList[index]}
    </div>
  );
}
