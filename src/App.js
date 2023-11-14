import './App.css';
import React from 'react';
import SecondPage from './pages/SecondPage'; 
import Mainpage from './MainPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

  

function App() {
  
  
  return (
    <Router>
      <Routes>
        <Route path="/second" element={<SecondPage />} />
          
          
        <Route path="/" element={<Mainpage />}>
          <Route index element={<Mainpage />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
