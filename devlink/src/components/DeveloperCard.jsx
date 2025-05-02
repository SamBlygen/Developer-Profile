import React from 'react';

function DeveloperCard(props){
  return(
<div>
  <h2>{props.name}</h2>
  <p>{props.title}</p>
</div>
  );
}