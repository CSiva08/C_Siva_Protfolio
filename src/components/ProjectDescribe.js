// src/components/ProjectDescribe.js
import React from 'react';
import './styles/ProjectDescribe.css';

const ProjectDescribe = ({ project }) => {
  const openGitHub = (projectLink) => {
    window.open(projectLink, '_blank');
  };
  return (
    <div className='projectdescribe_grid'>
      <div className='projectimage'>
        <img src={project.projectImage} alt='Project' />
        <div className='download_flex'>
          <button className='resume_download_button' onClick={()=>openGitHub(project.projectLink)}>GitHub</button>
          <button className='resume_download_button' onClick={()=>openGitHub(project.projectLink)}>Live Demo</button>
          </div>
      </div>
      <div className="projecttitle">
        <h4>{project.projectName}</h4>
      </div>
      <div className="projectdetails">
        <p>{project.projectDescription}</p>
      </div>
      <div className="projectfeatures">
        <h4>Features</h4>
        {project.projectDetails.map((detail, index) => (
          <div key={index}>
            <h5>{detail.heading}</h5>
            <p>{detail.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDescribe;
