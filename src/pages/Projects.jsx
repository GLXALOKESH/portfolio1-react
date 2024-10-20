import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of your first project goes here.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript']
  },
  {
    title: 'Project Two',
    description: 'Details about the second project can be added here.',
    technologies: ['Node.js', 'Express', 'MongoDB']
  },
  
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center h-[calc(100vh-60px)] bg-gray-100 text-gray-800 p-6 overflow-scroll">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 p-1">My Projects</h1>
      
      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <div>
              <h3 className="font-semibold">Technologies Used:</h3>
              <ul className="flex gap-2">
                {project.technologies.map((tech, idx) => (
                  <li key={idx} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
