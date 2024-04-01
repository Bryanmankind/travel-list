import {useState} from "react";


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Chager", quantity: 1, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>✈ Far Awway 🌍</h1>;
}

function Form() {
  const [description, setDescription ] = useState("");
  const [quantity, setQuantity ] = useState(1);

  function handlsubmit(e) {
    e.preventDefault();

    const newItem = {description, quantity, packed:false, id:Date.now()};
    console.log(newItem);
  }

  return (
    <form className="add-form" onSubmit={handlsubmit}>
      <h3>What do you need for your trip 👜</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="items...." value={description} onChange=
      {(e) => setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((map) => (
          <List items={map} key={map.id} />
        ))}
      </ul>
    </div>
  );
}

function List({ items }) {
  return (
    <li>
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity}
        {items.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you alredy packed X</em>
    </footer>
  );
}


