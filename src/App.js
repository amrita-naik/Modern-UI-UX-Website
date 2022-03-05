import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Price from './pages/Price';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Price />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
