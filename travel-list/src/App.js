import {useState} from "react";
import { Form } from "./Form";
import { Stats } from "./Stats";
import { PackingList } from "./PackingList";
import { Logo } from "./Logo";


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

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to delete all items")
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleAddIteams}/>
      <PackingList items={items} onDeletItem={handleDeletItem} onToggleitem={handleToggleitem} onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  );
}


