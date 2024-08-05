import './App.css';
import Home from './components/Home';
import People from './components/People';
import Planet from './components/Planet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people/:id" element={<People />} />
          <Route path="/planet/:id" element={<Planet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
