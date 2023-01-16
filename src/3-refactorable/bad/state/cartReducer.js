// Project files
import onAdd from "../scripts/onAdd";

export default function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return onAdd(state, action);
    case "empty":
      return onEmpty();
    default:
      throw new Error(`Unhandled action: ${action.type}`);
  }
}

// Methods
function onEmpty() {
  return [];
}
