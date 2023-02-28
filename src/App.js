import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Project from './components/Project'
import About from './components/About'


function App() {
  return (
    <div className='bg-slate-800 overflow-hidden'>
      <Header /> 
      <Navbar />
      <About />
      <Project />
      <Contacts />
      <Footer />
      
      </div>
  );
}

export default App;
