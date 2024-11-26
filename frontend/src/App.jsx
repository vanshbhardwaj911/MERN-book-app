import React from 'react';
import Home from './Home/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {
  const [authuser, setAuthuser] = useAuth();
  console.log(authuser);
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={authuser?<Courses />: <Navigate to="/signup"/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
