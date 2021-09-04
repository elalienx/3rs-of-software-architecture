export default function cartReducer(state, action) {
  console.log("cartReducer()");
  switch (action.type) {
    case "add":
      return add(state, action);
    case "empty":
      return [];
    default:
      throw new Error("Unhandled action:", action.type);
  }
}

// Functional programming.
/**
 * Seems like an overkill here (and it is)
 * But image if we need 10 lines of code to add a cart.
 * Example validating if the itemId exist in our inventory.
 * Then it becomes easier to read, outside the switch
 */
function add(state, action) {
  const { itemId } = action;

  return [...state, itemId];
}
