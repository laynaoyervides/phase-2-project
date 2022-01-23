import React from 'react';
import {Route, Routes} from 'react-router-dom';
import '../App.css';
import Gallery from './Gallery';
import Home from './Home'
import NavBar from './NavBar';
import Practice from './Practice';

function App() {


  return (
    <div className="App">
        <NavBar />
      <Routes>
        
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/practice" element={<Practice/>} />
        <Route path="*" element={<h1>404 not found</h1>}/>
        <Route exact path="/" element={<Home />} />
                  
      </Routes>

    </div>
  );
}

export default App;
