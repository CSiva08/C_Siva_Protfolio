import React from 'react';
import siva_image1 from './Image/siva_image2.png';
import './Home.css';
import { ServiceCard } from './components/ServiceCard';
import { Progress } from './components/Progress';
// import ProjectCard from './components/ProjectCard';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const Home = () => {
  const Navigate=useNavigate();
  const moveToContact=()=>{
    Navigate('/Contact');
  }
  const handleDownload = () => {
    
    const pdfUrl = "https://drive.google.com/file/d/1OfJ4xybhvZpY-ld-dwjbNNy--VIchThf/view?usp=sharing";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "C_SIVA_SOFTWARE_ENGINEER.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  };
  return (
    <>
    <div className='grid_container'>
        <div className='image_intro_grid image_intro'>
         <img className='box' style={{height:'100%', width:'100%'}} src={siva_image1} alt="C.Siva"/>
        </div>
        <div className='name_intro_grid name_intro'>
          <h2>Hello I,m</h2>
          <h1>C.Siva</h1>
          <h4 className='linearcolor_name'>Software Engineer</h4>
          <div className='download_flex'>
          <button className='resume_download_button' onClick={handleDownload}>Download CV</button>
          <button className='resume_download_button' onClick={moveToContact}>Contact Info</button>
          </div>
        </div>
      <div className='service_grid'>
        <h3> Service </h3>
        <ServiceCard/>
    </div>
    <div className='skill_intro'>
      <h1>Soft Skills</h1>
    </div>
    <div className='skill_slider'>
      <Progress/>
    </div>
    {/* <div className="project_home_grid">
      <h3>Projects</h3>
      <div className='project_flex'>
        <ProjectCard onClick={moveToProject}/>
        <ProjectCard/>
        <ProjectCard/>
      <ProjectCard onClick={() => setView('ProjectDescribe')} />
        </div>
    </div> */}
    </div>
    </>
  )
}

export default Home;