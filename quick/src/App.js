import './App.css';
import { Today } from './components/Today/Today';
import {Superior} from './components/Superior/Superior';
import { Calendar } from './components/Calendar/Calendar';
function App() {
  return (
    <div className="App">

      <header>
        headeeeer
      </header>

      <main className='principal'>
        <div className="superior-left">
        < Today />
        </div>
          
        <div className="superior-right">
          <div className='superior-right-up'>
          <Superior/>
          </div>
          <div className='superior-right-down'>
          <Calendar/>
          </div>
          
        </div>
      </main>

      <footer>
        footer
      </footer>
      



      
    </div>
  );
}

export default App;
