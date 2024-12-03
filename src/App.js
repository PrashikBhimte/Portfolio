import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
  );
}

export default App;
