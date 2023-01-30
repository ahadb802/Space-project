import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" />
          <Route path="/missions" />
          <Route path="/profile" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
