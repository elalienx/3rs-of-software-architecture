import ReadableBad from "./1-readable/bad/App";
import ReadableGood from "./1-readable/good/App";
import ReusableBad from "./2-reusable/bad/App";
import ReusableGood from "./2-reusable/good/App";
import RefactorableBad from "./3-refactorable/bad/App";
import RefactorableGood from "./3-refactorable/good/App";

export default function App() {
  /**
   * Instructions:
   * Comment out all components and only leave the one you want to view.
   */
  return (
    <div className="App">
      {/* --- Category: Refadable good and bad */}
      <ReadableBad />
      {/* <ReadableGood /> */}

      {/* --- Category: Refadable good and bad */}
      {/* <ReusableBad/>
      <ReusableGood/> */}

      {/* --- Category: Refactorable good and bad */}
      {/* <RefactorableBad/> */}
      {/* <RefactorableGood /> */}
    </div>
  );
}
