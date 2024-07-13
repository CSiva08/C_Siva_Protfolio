import React from 'react'
import './styles/Progress.css'
export const Progress = () => {
  return (
    <>
    
    <div className='progress_div'>
        <p>communication</p>
        <progress value={70} max={100}/>
      </div>
      <div className='progress_div'>
        <p>Leadership</p>
        <progress value={80} max={100} />
      </div>
      <div className='progress_div'>
        <p>teamwork</p>
        <progress value={80} max={100} />
      </div>
    </>
  )
}
