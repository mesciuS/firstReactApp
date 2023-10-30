import logo from './logo.svg';
import React from "react";
import './App.css';
import Heading from './components/Heading.js';
import Card from './components/Card.js';
import DynamicEvents from './components/DynamicEvents';
import Fruits from './components/Fruits';
import FruitsCounter from './components/FruitsCounter';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
// devo importare tutti gli elementi che voglio usare per il router, in automatico mi importa solo Routes
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
  ]);

  return (
    <div className='App'>
      {/* questa è la sintassi per il routing */}
      <nav>
        <h1>Routing example</h1>
        <Link to="/homepage" className='mav-item'>Home</Link>
        <Link to="/contact" className='mav-item'>Contact</Link>
      </nav>
      <Routes>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <hr></hr>
      {/* più di un compoment devono stare dentro un root componemt come un div */}
      <Heading  firstName="Anna" />
      <Heading firstName="Giacomo" />
      <hr></hr>
      <h1>Task: Add three card elements </h1>
      <Card h2="First card's h2" h3="First card's h3"/>
      <Card h2="Second card's h2" h3="Second card's h3"/>
      <Card h2="Third card's h2" h3="Third card's h3"/>
      <hr></hr>
      <h1>Task: add a button and handle a click event</h1>
      <DynamicEvents />
      <hr></hr>
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits}/>
      <FruitsCounter fruits={fruits}/>
    </div>
  );
}

export default App;
