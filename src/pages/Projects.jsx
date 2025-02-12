// src/pages/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    { 
      name: 'News Aggregator', 
      link: 'https://github.com/DivyadharshiniA/News-Website',
      description: 'A React-based web application that aggregates news from various sources, providing a seamless reading experience.' 
    },
    { 
      name: 'Tic Tac Toe (React)', 
      link: 'https://github.com/DivyadharshiniA/tic-tac-toe-React',
      description: 'A two-player Tic Tac Toe game built with React, featuring an intuitive UI and real-time winner tracking.' 
    },
    { 
      name: 'Weather Dashboard', 
      link: 'https://github.com/DivyadharshiniA/weather-dashboard',
      description: 'A weather dashboard that provides current weather information for any city, built using React and weather APIs.' 
    },
    { 
      name: 'Railway Reservation System (DBMS Project)', 
      link: 'https://github.com/DivyadharshiniA/DBMS-RAILWAY-RESERVATION-',
      description: 'A database management project simulating a railway reservation system with SQL and relational database concepts.' 
    },
    { 
      name: 'Earth AR Project', 
      link: 'https://github.com/DivyadharshiniA/AR-Project',
      description: 'An augmented reality project that visualizes the Earth in 3D, providing an interactive experience using AR technology.' 
    },
    { 
      name: 'Word Guessing Game (Python)', 
      link: 'https://github.com/DivyadharshiniA/word-guessing-game',
      description: 'A simple yet engaging word guessing game developed in Python, challenging users to guess the hidden word.' 
    },
    { 
      name: 'Watch Data Java Project', 
      link: 'https://github.com/DivyadharshiniA/COLLECT-AND-SAVE-WATCH-INFORMATION-',
      description: 'A Java-based project for collecting and saving watch information, demonstrating data storage and retrieval.' 
    },
    { 
      name: 'Python Mini Projects', 
      link: 'https://github.com/DivyadharshiniA/python-mini-projects',
      description: 'A collection of Python mini-projects that showcase solutions to various coding challenges and real-world problems.' 
    }
  ];
  <br />

  return (
    <div className="container mx-auto my-16 p-8">
      <h2 className="text-4xl font-bold mb-4">My Projects</h2>
      <ul className="list-disc pl-6">
        {projects.map((project, index) => (
          <li key={index} className="text-lg mb-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-semibold">
              {project.name}
            </a>
            <p className="text-gray-600">{project.description}</p>
          </li>
        ))}
      </ul>
      
    </div>
    
  );
};

export default Projects;
