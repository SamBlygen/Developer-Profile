import React from 'react';
import DeveloperCard from "./components/DeveloperCard";
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DeveloperList from './components/DeveloperList';
import Navbar from './Navbar';

function App() {
  return (
  
    <div>
      <Home />
      <DeveloperCard 
        name="SamBly" 
        title="Entry Level Software Engineer" 
        github="https://github.com/samblygen"
        avatar="https://avatars.githubusercontent.com/u/175444843?s=400&u=ef348de77ded117112da012e8fde8274229d5fc6&v=4"
      />
      <DeveloperList />
    </div>
  );
}

export default App;
