export default function onAdd(state, action) {
  const { itemId } = action;

  return [...state, itemId];
}
