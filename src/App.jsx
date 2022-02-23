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
