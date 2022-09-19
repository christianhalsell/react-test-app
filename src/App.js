import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ToDo from './pages/ToDo';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/todo' element={<ToDo />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
