import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading.js';


function App() {
  return (
    <div className='App'>
      {/* i components con proprs devono stare dentro un div */}
      <Heading  firstName="Anna" />
      <Heading firstName="Giacomo" />
    </div>
  );
}

export default App;
