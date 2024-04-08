import {useState} from "react";
import { Form } from "./component/Form";
import { Stats } from "./component/Stats";
import { PackingList } from "./component/PackingList";
import { Logo } from "./component/Logo";


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


