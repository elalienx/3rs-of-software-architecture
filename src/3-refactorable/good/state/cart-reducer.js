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
 * But imagine if we need 10 lines of code to add to the cart.
 * Example: validating if the itemId still is in stock.
 * Then it becomes easier to read, outside the switch
 */
function add(state, action) {
  const { itemId } = action;

  return [...state, itemId];
}
