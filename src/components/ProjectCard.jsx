import React from 'react'

const ProjectCard = ({title, description, link, sourceCode, liveDemoUrl, githubUrl}) => {
  return (
    <div className='font-bitcount'>
      <details className='border-2 rounded-3xl p-5'>
        <summary className='text-3xl cursor-pointer'>{title}</summary>
        <div className='font-light'>
          <div className='mt-2'> 
          <p>{description}</p>
        </div>
          <div className='mt-4 flex gap-2'>
            <p>Live Demo:</p>
            <a href={liveDemoUrl} className='' target='_blank'><span className='font-medium'>{link}</span></a>
          </div>

          <div className='flex gap-2'>
            <p>Source Code:</p>
            <a href={githubUrl} target='_blank'><span className='font-medium'>{sourceCode}</span></a>
          </div>S
        </div>
      </details>
    </div>
  )
}

export default ProjectCard