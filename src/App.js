import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Rocket from './Components/pages/Rocket/Rocket';
import Mission from './Components/pages/Mission/Mission';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/missions" element={<Mission />} />
          <Route path="/profile" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
