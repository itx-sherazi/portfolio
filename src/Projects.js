import React, { useState } from "react";
import video1 from "./Images/CV.mp4";
import video2 from "./Images/BroqueCSS.mp4";
import video3 from "./Images/Restoran.mp4";
import image1 from "./Images/facebook.jpeg";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "HTML Video Project",
      description: "A project showcasing HTML structure with a demo video.",
      category: "HTML",
      type: "image",
      src: image1,
    },
    {
      id: 2,
      title: "CSS Image Project",
      description: "A visually stunning project using advanced CSS.",
      category: "CSS",
      type: "video",
      src: video2,
    },
    {
      id: 3,
      title: "JS Video Project",
      description: "A dynamic web application powered by JavaScript.",
      category: "JavaScript",
      type: "video",
      src: video1,
    },
    {
      id: 4,
      title: "React Video Project",
      description: "A responsive React project with video content.",
      category: "React",
      type: "video",
      src: video3,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="bg-black py-12 px-6 md:px-12 lg:px-20">
      <h2 className="text-center text-white text-4xl font-bold mb-8">Projects</h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {["All", "HTML", "CSS", "JavaScript", "React"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-lg text-white font-semibold ${
              selectedCategory === category
                ? "bg-orange-500"
                : "bg-gray-700 hover:bg-gray-600"
            } transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Conditional Rendering for Video or Image */}
            {project.type === "video" ? (
              <video
                controls
                className="w-full h-60 object-cover"
                poster="/path/to/placeholder.jpg"
              >
                <source src={project.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-xl text-orange-400 font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
