import React from 'react';
import img1 from './Images/Alishba Akram.jpeg';

const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-16 px-4 flex justify-center items-center flex-col"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <img
            src={img1}
            alt="Alishba Akram"
            className="rounded-2xl w-full max-w-sm border-4 border-white shadow-lg"
          />
          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl mb-4">
              I design and code simple things and gym rat chasing aesthetics.
              Just simple like that!!
            </p>
            <p className="text-orange-400 text-2xl md:text-3xl font-bold mb-4">
              I'm Alishba Akram <b>Frontend Developer</b>
            </p>
            <p className="text-md md:text-lg">
              I specialize in crafting seamless, visually appealing interfaces
              that captivate users and elevate digital experiences. My goal is
              to master the art of Frontend Development, constantly honing my
              skills in HTML, CSS, JavaScript, and React JS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
