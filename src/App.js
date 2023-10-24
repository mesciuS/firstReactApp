import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading.js';
import Card from './components/Card.js';


function App() {
  return (
    <div className='App'>
      {/* più di un compoment devono stare dentro un root componemt come un div */}
      <Heading  firstName="Anna" />
      <Heading firstName="Giacomo" />
      <h1>Task: Add three card elements </h1>
      <Card h2="First card's h2" h3="First card's h3"/>
      <Card h2="Second card's h2" h3="Second card's h3"/>
      <Card h2="Third card's h2" h3="Third card's h3"/>
    </div>
  );
}

export default App;
