import Navigation from './Components/Navbar';
import Welcome from './Components/Welcome';
import Statistics from './Components/Statistics';
import SecurityUpdate from './Components/SecurityUpdate';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Welcome />
      <Statistics />
      <SecurityUpdate />
      <Footer />
    </div>
  );
}

export default App;
