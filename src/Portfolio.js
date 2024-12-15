import React from 'react';
import img1 from './Images/Alishba Akram.jpeg';
import Navigation from './Navigation';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function Portfolio() {
  return (
    <div className="bg-black text-white">
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 relative">

      <div className="flex-1 text-left">

          <p className="text-2xl md:text-3xl lg:text-4xl">Hii, I'm Alishba Akram</p>
          <p className="text-3xl md:text-4xl lg:text-5xl mt-4">
            Passionate{' '}
            <b className="text-orange-500 text-4xl md:text-5xl lg:text-6xl">Frontend Developer</b>
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl mt-2">UI/UX Designer</p>
        </div>
        <div className="flex-shrink-0 mt-8 md:mt-0">

        <img
  src={img1}
  alt="Alishba Akram"
  className="rounded-lg opacity-90 border-8 border-white w-[250px] md:w-[320px] h-[300px] md:h-[340px]"
  loading="lazy"
/>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-[90%] mx-auto border-white my-4" />

      {/* Sections */}
      <About />
      <hr className="w-[90%] mx-auto border-white my-4" />
      <Skills />
      <hr className="w-[90%] mx-auto border-white my-4" />
      <Projects />
      <hr className="w-[90%] mx-auto border-white my-4" />
      <Contact />
    </div>
  );
}

export default Portfolio;
