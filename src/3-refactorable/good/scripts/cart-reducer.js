export default function CartReducer(state, action) {
  switch (action.type) {
    case "add":
      const { itemId } = action;

      return [...state, itemId];
    case "empty":
      return [];
    default:
      throw new Error("Unhandled action:", action.type);
  }
}
