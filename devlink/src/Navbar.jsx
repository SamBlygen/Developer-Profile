import React from 'react';

const Navbar=()=>{
  return(
    <nav className='bg-white shadow-md p-4 flex justify-between items-center'>
      <h1 className='text-2xl font-bold text-indigo-600'>DevLink</h1>
      <ul className='flex space-x-6 text-gray-700 font-medium'>
<li><a href='#' className=''hover:text-indigo-600> Contact
  </a></li>

      </ul>

    </nav>
  );
};

export default Navbar;