import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
