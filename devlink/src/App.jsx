import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DeveloperCard from "./components/DeveloperCard";
import DeveloperList from './components/DeveloperList';
import Home from './pages/Home';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />

        {/* Developer page route */}
        <Route path="/developers" element={<DeveloperList />} />

        {/* Optional: single dev card page (example) */}
        <Route path="/sam" element={
          <DeveloperCard 
            name="SamBly" 
            title="Entry Level Software Engineer" 
            github="https://github.com/samblygen"
            avatar="https://avatars.githubusercontent.com/u/175444843?s=400&u=ef348de77ded117112da012e8fde8274229d5fc6&v=4"
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;

