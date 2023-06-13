
import './App.css';
import Landing from './pages/Landing';
import About from './pages/About';
import Home from './pages/Home';
import Word from './pages/Word';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import Number from './pages/Number';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/number/" element={<Number />} />
        <Route path="/number/:num" element={<Number />} />
        <Route path="/word/" element={<Word />} />
        <Route path="/word/:str" element={<Word />} />
      </Routes>
    </div >
  );
}

export default App;
