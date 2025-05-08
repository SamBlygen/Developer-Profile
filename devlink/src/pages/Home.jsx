import React from 'react';
import Navbar from '../Navbar';

const Home = () => {
  return (
   <>
<Navbar/>
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 px-4">
       
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Welcome to DevLink
      </h1>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
    </>
  );
};

export default Home;
