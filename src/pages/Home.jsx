import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] bg-gray-100 text-gray-800 p-6">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg max-w-2xl text-center mb-8">
        I’m <b>Raghib Jamil</b> a passionate full-stack developer focused on building clean and responsive web applications. Explore my projects and learn more about my journey.
      </p>
      <a href="/projects" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
        View My Projects
      </a>
    </div>
  );
};

export default Home;
