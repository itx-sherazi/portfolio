import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faJs, faNodeJs, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skills = [
    { name: 'React.js', icon: faReact },
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3Alt },
    { name: 'JavaScript', icon: faJs },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'Git', icon: faGitAlt },
    { name: 'Databases', icon: faDatabase },
  ];

  return (
    <section id="skills" className="bg-black py-12 px-6 md:px-12 lg:px-20 text-white">
      <h2 className="text-center text-4xl font-bold mb-8">
        <b>My Skills</b>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300"
          >
            <FontAwesomeIcon icon={skill.icon} size="3x" className="text-orange-500 mb-4" />
            <p className="text-xl font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
