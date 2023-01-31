import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Rocket from './Components/pages/Rocket/Rocket';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/missions" />
          <Route path="/profile" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
