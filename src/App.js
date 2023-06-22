import './App.css';
import Home from './Components/Home';
import About from './Components/About'
import Plans from "./Components/Plans"
import Testimonial from "./Components/Testimonial"
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App"> 
      <Home />
      <About />
      <Plans />
      <Contact />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
