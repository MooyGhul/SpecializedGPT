import React, { useState,useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GptsListPage from './pages/GptsListPage';
import ProtectedRoute from './components/ProtectedRoute';
import GptDetailPage from './pages/GptDetailPage';

type Item = {
  name: string;
  price: number;
};

function App() {
  const [items, setItems ] = useState<Item[]>([]);

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
