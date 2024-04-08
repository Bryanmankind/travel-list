import {useState} from "react";


export default function App() {
  const [items, setItems ] = useState([]);

  function handleAddIteams (item) {
    setItems((items) => [...items, item])
  }

  function handleDeletItem (id) {
    setItems((items) => items.filter((item) => item.id !== id) )
  }

  function handleToggleitem (id)  {
    setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item))
  }

  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleAddIteams}/>
      <PackingList items={items} onDeletItem={handleDeletItem} onToggleitem={handleToggleitem} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>✈ Far Awway 🌍</h1>;
}

function Form({onAdditems}) {
  const [description, setDescription ] = useState("");
  const [quantity, setQuantity ] = useState(1);

  function handlsubmit(e) {
    e.preventDefault();
    
    if (!description) return;
    const newItem = {description, quantity, packed:false, id:Date.now()};
    console.log(newItem);

    onAdditems(newItem);

    setDescription("");
    setQuantity("");

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

function PackingList({items, onDeletItem, onToggleitem}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <List items={item} onDeletItem={onDeletItem} onToggleitem={onToggleitem} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function List({ items, onDeletItem, onToggleitem }) {
  return (
    <li>
      <input type="checkbox" value={items.packed} onChange={() => onToggleitem(items.id)}/>
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity}
        {items.description}
      </span>
      <button onClick={() => onDeletItem(items.id)}>❌</button>
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


