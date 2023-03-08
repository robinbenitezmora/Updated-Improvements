<script src="http://192.168.56.1:8097"></script>
import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Service from './components/service/Service';
import Portfolio from '//portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial';
import Contact from '//contact/Contact';
import Footer from '//footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App