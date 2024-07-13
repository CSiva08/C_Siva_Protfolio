import React from 'react'
import { VscGist } from "react-icons/vsc";
import { FaForward } from "react-icons/fa6";
import './styles/ServiceCard.css'
export const ServiceCard = () => {
  return (
    <div className='flex_container'>
          <div className='flex1'>
            <VscGist style={{fontSize:'5rem', margin:'5vh'}}/>
            <h4>Web Developer</h4>
            <br/>
            <p className='icon_text'><FaForward className='icon'/>Html</p>
            <p className='icon_text'><FaForward className='icon'/>Css</p>
            <p className='icon_text'><FaForward className='icon'/>Javascript</p>
            <p className='icon_text'><FaForward className='icon'/>React</p>
            <p className='icon_text'><FaForward className='icon'/>Tailwind</p>
          </div>
          <div className='flex2'>
            <VscGist style={{fontSize:'5rem', margin:'5vh'}}/>
            <h4>Programmer</h4>
            <br/>
            <p className='icon_text'><FaForward className='icon'/>Java</p>
            <p className='icon_text'><FaForward className='icon'/>Javascript</p>
            <p className='icon_text'><FaForward className='icon'/>Sql</p>
            <p className='icon_text'><FaForward className='icon'/>Data Structures and Algorithms</p>
          </div>
        </div>
  )
}
