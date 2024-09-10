import React, { useState,useEffect } from 'react';
import LoginPage from './pages/loginPage';
import GptsListPage from './pages/gptsListPage';

type Item = {
  name: string;
  price: number;
};

function App() {
  const [items, setItems ] = useState<Item[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (isLoggedIn) {
      fetch("http://localhost:8080/api/items")
        .then(res => res.json())
        .then(data => setItems(data));
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? <GptsListPage items={items}/>: <LoginPage onLogin={handleLogin}/>}
    </div>
  );
}

export default App;
