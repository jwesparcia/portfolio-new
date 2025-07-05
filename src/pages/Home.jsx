import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { MoveRight } from 'lucide-react'
const Home = () => {
  return (
    <>
      <div className='text-white'>
         <div className=' w-3xl ml-auto mr-auto text-left pl-3 '>
              <div className=' p-7 text-5xl font-bitcount font-medium'>
                <h1>I'm Jhune Wally Esparcia</h1>
              </div>
              <div className=' p-7 text-2xl font-bitcount font-semibold'>
                <p>Hello! Welcome to my portfolio website. I'm a Computer Science student currently diving into the exciting world of front-end development. This site showcases my projects, skills, and progress as I learn and grow in this field. Explore my work to see what I've been building and what I'm passionate about. I'm always eager to learn and improve, so feel free to check out my projects and reach out!</p>
              </div>
            <div className=' p-7 text-[0.9rem] font-bitcount   font-semibold flex justify-center'>
              <div className=' cursor-pointer '>
                <Link className='flex items-center' to={"/about"}><span className='mr-2'>See more about me</span> <MoveRight/></Link>
              </div>
            </div>
         </div>
      </div>
     
    </>
  )
}

export default Home