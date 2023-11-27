import Navigation from './Components/Navbar';
import Welcome from './Components/Welcome';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Components/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
