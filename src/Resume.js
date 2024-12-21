import React from 'react';
import resume from './Image/Resume.jpg';
// import resume_pdf from './C_SIVA_SOFTWARE_ENGINEER.pdf';
import { useNavigate } from 'react-router-dom';
import './Resume.css';

export const Resume = () => {
    const Navigate=useNavigate();
  return (
    <div className='resume_grid'>
        <div className='resume_header'>
            <h1>Resume</h1>
                <div className='resume_navigate'><p onClick={()=>Navigate('/')}>Home</p> || <p>Resume</p></div>
            {/* <div className='resume_download'>
                    <button onClick={() => window.open(resume_pdf, '_blank')}>Get Resume</button>
            </div>  */}
        </div>
        <div className="resume_view">
            <img  src={resume} alt='Resume'/>
        </div>
    </div>
  );
}

export default Resume;
