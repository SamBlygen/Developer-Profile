import React, { useState, useEffect } from "react";
import DeveloperCard from "./DeveloperCard";

const DeveloperList = () => {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(data => {
        const transformed = data.map(user => ({
          id: user.id,
          name: user.name,
          title: user.company.bs,
          avatar: `https://i.pravatar.cc/100?img=${user.id}`,
          github: `https://github.com/${user.username}`
        }));
        setDevelopers(transformed);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading Developers...</div>;
  }

  return (
    <div className="developer-list">
      {developers.map((dev) => (
        <DeveloperCard
          key={dev.id}
          avatar={dev.avatar}
          name={dev.name}
          title={dev.title}
          github={dev.github}
        />
      ))}
    </div>
  );
};

export default DeveloperList;
