import './App.css';
import Hour from './Hour';
import Minute from './Minute';
import Second from './Second';

function App() {
  return (
    <div className="App">
      <div className='clock'>
      <h3>Digital Clock</h3>
      
      <Hour />
      <span>:</span>
      <Minute />
      <span>:</span>
      <Second />
    </div>
    </div>
  );
}

export default App;
