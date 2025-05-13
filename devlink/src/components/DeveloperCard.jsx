import React from 'react';
import '../DeveloperCard.css';

function DeveloperCard(props) {
  return (
    <div className='card'>
      <img 
        src={props.avatar} 
        alt={`${props.name}'s avatar`}
        width="100"
        height="100"
      />
      <h2>{props.name}</h2>
      <p>{props.title}</p>
      <a 
        href={props.github}
        target='_blank'
        rel='noopener noreferrer'
      >
        GitHub Profile
      </a>
    </div>
  );
}

export default DeveloperCard;
