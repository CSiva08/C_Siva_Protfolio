// src/components/ProjectCard.js
import React from 'react';
import './styles/ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className='project_main_card' onClick={handleClick}>
      <div className='project_container'>
        <img src={project.projectImage} alt='Project' className='project_image' />
        <div className='overlay'>
          <div className='text'><p>{project.projectName}</p></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
