import React from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
