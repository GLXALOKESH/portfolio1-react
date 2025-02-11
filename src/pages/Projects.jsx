import React from 'react';

const projects = [
  {
    title: 'To do Web Application',
    description: 'This simple Todo application, built with React, uses the Context API for state management and supports CRUD operations. It allows users to add, view, update, and delete tasks, with data persistence handled via the browser\'s local storage',
    link:'https://todo-project-five-inky.vercel.app/',
    technologies: ['React', 'Tailwind CSS', 'JavaScript']
  },
  {
    title: 'Blog Web Application',
    description: 'Developed a fully responsive blog web application using React and Redux Toolkit (RTK). The application features secure user authentication via Appwrite, enabling full blog CRUD (Create, Read, Update, Delete) operations. Implemented efficient form management with React Hook Form, dynamic navigation with React Router, and an aesthetically pleasing UI using Tailwind CSS and React Icons. Integrated interactive notifications via React Hot Toast and provided a rich text editing experience through TinyMCE-React.',
    link:'https://bog-project.vercel.app/',
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
            <a className="mb-4 text-blue-600" href={project.link}>Click Here To Access The webApp</a>
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
