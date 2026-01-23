import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
// import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  useEffect(() => {
    const handlePointerMove = (event) => {
      const x = `${event.clientX}px`;
      const y = `${event.clientY}px`;
      const root = document.documentElement;
      root.style.setProperty('--cursor-x', x);
      root.style.setProperty('--cursor-y', y);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <About /> */}
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;

