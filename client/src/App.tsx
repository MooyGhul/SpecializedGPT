import React, { useState,useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/Registration';
import GptsListPage from './pages/GptsListPage';
import ProtectedRoute from './components/ProtectedRoute';
import GptDetailPage from './pages/GptDetailPage';

type Item = {
  name: string;
  price: number;
};

function App() {
  const [items, setItems ] = useState<Item[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    // Initialize state from localStorage
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    if (isLoggedIn) {
      fetch("http://localhost:8080/api/items")
        .then(res => res.json())
        .then(data => setItems(data));
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  return (
    <div className="App">
      <Routes>
        
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/registration" element={<RegistrationPage />} />

       
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/homepage" element={<GptsListPage items={items} />} />
          <Route path="/homepage/:gptId" element={<GptDetailPage />} />
        </Route>

        
        <Route path="/" element={<Navigate to="/login"/>} />
      </Routes>
    </div>
  );
}

export default App;
