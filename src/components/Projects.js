import React from 'react';

function Projects() {
  return (
    <section id="projects" className="bg-gray-100 p-8 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Projects</h2>
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded-md shadow-sm hover:bg-gray-200 hover:shadow-md transition-shadow transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-gray-700">Project 1</h3>
          <p className="text-gray-600">Description of project 1</p>
        </li>
        <li className="bg-white p-4 rounded-md shadow-sm hover:bg-gray-200 hover:shadow-md transition-shadow transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-gray-700">Project 2</h3>
          <p className="text-gray-600">Description of project 2</p>
        </li>
        <li className="bg-white p-4 rounded-md shadow-sm hover:bg-gray-200 hover:shadow-md transition-shadow transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-gray-700">Project 3</h3>
          <p className="text-gray-600">Description of project 3</p>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
