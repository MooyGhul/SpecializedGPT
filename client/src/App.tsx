import React, { useState,useEffect } from 'react';

type Item = {
  name: string;
  price: number;
};

function App() {
  const [items, setItems ] = useState<Item[]>([]);

  useEffect(()=> {
    fetch("http://localhost:8080/api/items")
    .then(res => res.json())
    .then(data => setItems(data));
  },[]);

  return (
    <div className="App">
      <header className="App-header">
      <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
