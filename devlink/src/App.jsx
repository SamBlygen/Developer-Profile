import React from 'react';
import DeveloperCard from "./components/DeveloperCard";
import Home from './pages/Home';

function App(){
  return(
    <div>
      <Home/>
      <DeveloperCard name="SamBly" title="Entry Level Software Engineer" 
      github="https://github.com/samblygen"
      avatar= "https://avatars.githubusercontent.com/u/175444843?s=400&u=ef348de77ded117112da012e8fde8274229d5fc6&v=4"
      
      />

    </div>
  );
}

export default App;