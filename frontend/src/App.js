import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ScoreCard from './pages/ScoreCard';

import "bootstrap/dist/css/bootstrap.min.css"
import QuestionsPage from './pages/QuestionsPage';
import { useState } from 'react';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
     {/* <h3>QUIZ APP</h3> */}
     <div className="container">
     <Routes>
      <Route path='/' element={<HomePage /> } />
      <Route path='/questions' element={<QuestionsPage />} />
      <Route path='/score' element={<ScoreCard /> } />
     </Routes>
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
