import React, {useState, useEffect} from "react";

const DeveloperList =() =>{
  //The notepad where i store the list of Developers
  const [Developers, setDevelopers]=
  useState([]);

  //A flag to know if we are still waiting on the delivery
  const [loading, setloading]=
  useState([]);

 //The side effect calling API when the truck opens
 useEffect(()=>{
  //the call that is fetching the data

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>
response.json())//read the data

.then((data)=>{
setDevelopers(data);//write the data

setloading(false);// take down the loading sign
});
 },[]);// []= runs this only one like opening the truck for the day

 //while we are still waiting on the date show this 
 if(loading){
  return <div>Loading Developers...</div>
 }
//once the data is in display the developers
return(
  <div>
    {Developers.map((dev)=>
    (
    <div key={dev.id}>
      <h3>{dev.name}</h3>
      <p>{dev.email}</p>
      <p>{dev.website}</p>
</div>
    ))}
  </div>
);

 };

 export default DeveloperList;