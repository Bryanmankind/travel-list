export function List({ items, onDeletItem, onToggleitem }) {
  return (
    <li>
      <input type="checkbox" value={items.packed} onChange={() => onToggleitem(items.id)} />
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity}
        {items.description}
      </span>
      <button onClick={() => onDeletItem(items.id)}>❌</button>
    </li>
  );
}
