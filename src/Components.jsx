// Project files
import ReadableBad from "./1-readable/bad/Project";
import ReadableGood from "./1-readable/good/Project";
import ReusableBad from "./2-reusable/bad/Project";
import ReusableGood from "./2-reusable/good/Project";
import RefactorableBad from "./3-refactorable/bad/Project";
import RefactorableGood from "./3-refactorable/good/Project";

export default function Components({ index }) {
  // Properties
  const list = [
    <ReadableBad />,
    <ReadableGood />,
    <ReusableBad />,
    <ReusableGood />,
    <RefactorableBad />,
    <RefactorableGood />,
  ];

  return <div>{list[index]}</div>;
}
