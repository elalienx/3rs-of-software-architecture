export default function CartReducer(state, action) {
  switch (action.type) {
    case "add":
      return add(state, action);
    case "empty":
      return [];
    default:
      throw new Error("Unhandled action:", action.type);
  }
}

function add(state, action) {
  const { itemId } = action;

  return [...state, itemId];
}
