import React from 'react'

const Home = ()=>{
  return(
    <section className='flex flex-colitems-center justify-center h-screen text-center bg-gray-100 px-4'>
      <h1 className='text-4xl md:text-6x1 font-bold text-gray-800 mb-4'>
        Welcome to DevLink
      </h1>
      <button className='bg-blue-600 text-white px-6 py-3 rounded-xl text-1g hover;bg-blue-700 transitions'>
        Get Started
      </button>
    </section>
    
  );
};

export default Home;