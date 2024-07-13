import React, { useState } from 'react';
import './Project.css';
import ProjectCard from './components/ProjectCard';
import ProjectDescribe from './components/ProjectDescribe';
import projectData from './projectData';
import { useNavigate } from 'react-router-dom';

export const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredProjects = filter === 'All' 
    ? projectData 
    : projectData.filter(project => project.projectTechnology === filter);

  return (
    <div className='project_grid'>
      <div className='project_header'>
        <h1>Projects</h1>
        <div className='project_navigate'>
          <p onClick={() => navigate('/')}>Home</p> || <p onClick={() => setSelectedProject(null)}>Projects</p>
        </div>
      </div>
      <div className='project_card'>
        {!selectedProject ? (
          <>
            <div className='project_filter'>
              <button onClick={() => setFilter('All')}>All</button>
              <button onClick={() => setFilter('Java')}>Java</button>
              <button onClick={() => setFilter('React')}>React</button>
              <button onClick={() => setFilter('Javascript')}>Javascript</button>
            </div>
            <div className='projectcard_flex'>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard 
                    key={index} 
                    project={project} 
                    onClick={() => setSelectedProject(project)} 
                  />
                ))
              ) : (
                <p>No projects available</p>
              )}
            </div>
          </>
        ) : (
          <ProjectDescribe project={selectedProject} />
        )}
      </div>
    </div>
  );
};

export default Project;
