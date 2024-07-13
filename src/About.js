import React from 'react'
import './About.css';
import { useNavigate } from 'react-router-dom';
export const About = () => {
const Navigate=useNavigate();
  return (
    
    <div className="about_grid">
    <div className='about_header'>
    <h1>About</h1>  
    <div className='project_navigate'><p onClick={()=>Navigate('/')}>Home</p> || <p>About</p></div>  
    </div>
    <div className="about_timeline">
    <ul class="timeline">
	<li>
		<div class="direction-r">
			<div class="flag-wrapper">
				<span class="flag">Fresher</span>
				<span class="time-wrapper"><span class="time">2024 - present</span></span>
			</div>
			<div class="desc">Looking for the Software Developer Oppurtunity where i can showcase my skills and improve with the real world projects.</div>
		</div>
	</li>
	<li>
		<div class="direction-l">
			<div class="flag-wrapper">
				<span class="flag">Vellore Institute of Technology</span>
				<span class="time-wrapper"><span class="time">2019 - 2024</span></span>
			</div>
			<div class="desc">I graduated with the degree of integrated Mtech with specializaion of Software Engineering.</div>
		</div>
	</li>
	<li>
		<div class="direction-r">
			<div class="flag-wrapper">
				<span class="flag">Sri Vivekanandha Junior College</span>
				<span class="time-wrapper"><span class="time">2017 - 2019</span></span>
			</div>
			<div class="desc">Completed Intermidiate with Mpc group.</div>
		</div>
	</li>
    <li>
		<div class="direction-l">
			<div class="flag-wrapper">
				<span class="flag">Devi Vidhya Mandhir</span>
				<span class="time-wrapper"><span class="time">2017</span></span>
			</div>
			<div class="desc">Completed Schooling.</div>
		</div>
	</li>
    <li>
		<div class="direction-r">
			<div class="flag-wrapper">
				<span class="flag">Birth</span>
				<span class="time-wrapper"><span class="time">2001</span></span>
			</div>
			<div class="desc">Arrived on Earth to start the race of life.</div>
		</div>
	</li>
</ul>
</div>
</div>
  );
}

export default About;
