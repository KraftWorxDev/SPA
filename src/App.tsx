import type { Component } from 'solid-js';
import Nav from './components/navigation/Nav';
import Footer from './components/navigation/Footer';
import Home from './pages/Home';

const App: Component = () => {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  );
};

export default App;
