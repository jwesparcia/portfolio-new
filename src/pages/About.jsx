import React from 'react'
import { CircleSmall } from 'lucide-react'
import { MoveRight } from 'lucide-react'
import { SquareCode  } from 'lucide-react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className=''>
      <div className='-red-400 w-3xl ml-auto mr-auto text-left grid grid-cols-2'>
        <div className='font-bitcount pl-3 font-medium'>
          <div className='text-5xl my-10'>
             <h1>About Me</h1>
          </div>
          <div className='mb-4 flex'>
           <CircleSmall className='w-12 mr-3'/> <p>Hi, I’m <span className='font-bold'>Jhune Wally Esparcia</span>, a front-end developer passionate about building beautiful, user-friendly web experiences.</p>
          </div>
          <div className='flex'>
            <CircleSmall className='w-10 mr-3'/> <p>
              I work mainly with JavaScript, React, and Node.js, and I’m also experienced in Java and Python.
            </p>
          </div>
          <div className=' w-2xs my-4 '>
            <div className='flex'>
               <h2>TECH STACK</h2> <SquareCode  className='h-5 mt-[0.5px]'/>
            </div>
            <div className='flex'>
              <div className='mt-0'>
                 <MoveRight className='pb-2 size-6.5'/> 
              </div>
              <span className='fa-brands fa-html5 size-5'></span>
              <span className='fa-brands fa-css3 size-5'></span>
              <span className='fa-brands fa-react size-5'></span>
              <span className='fa-brands fa-java size-5'></span>
              <span className="fa-brands fa-js size-5"></span>
            </div>
          </div>

          <div className=''>
            <Link to={"/projects"} className='flex'>
              <h1 className='mr-1'>View my projects</h1> <MoveRight/>
            </Link>
            
          </div>

        </div>
        <div className=' pl-3'>
          <div>
            <img src="./src/assets/me.jpg.png" alt="Picture" className='rounded-3xl' />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About