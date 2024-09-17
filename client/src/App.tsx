import React, { useState,useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GptsListPage from './pages/gptsListPage';
import ProtectedRoute from './components/ProtectedRoute';
import GptDetailPage from './pages/GptDetailPage';

type Item = {
  name: string;
  price: string;
};

function App() {
  const [items, setItems ] = useState<Item[]>([]);

  useEffect(() => {
      fetch("http://localhost:8080/api/items")
        .then(res => res.json())
        .then(data => setItems(data));
    }
  ,[]);

  return (
    <div className="App">
      <Routes>
        <Route path="/homepage" element={<GptsListPage items={items} />} />
        <Route path="/homepage/:gptId" element={<GptDetailPage />} />
        <Route path="/" element={<Navigate to="/homepage"/>} />
      </Routes>
    </div>
  );
}

export default App;
