import React from 'react'
import ContactForm from '../components/ContactForm'
import { MoveLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div className=' md:w-3xl ml-auto mr-auto font-bitcount w-auto md:p-0 p-5 '>
      <div className="flex text-[1rem] md:text-[1.2rem]">
          <Link to={"/"} className="flex cursor-pointer"><span className="mr-2"><MoveLeft className="md:size-7 md: size-5.5 "/></span>Back to home  </Link>
        </div>
      <div className='text-[2rem] md:text-5xl font-bitcount text-center '>
        <h1>Contact me</h1>
      </div>
      <div className=' '>
        <p>Get in touch or shoot me an email directly on <span className='font-bold'>jhuneesparcia1@gmail.com</span> </p>
      </div>

      <div className=''>
         <ContactForm
        name={"Name"}
        email={"Email"}
        message={"Message"}
      />
      </div>
     

    
    </div>
  )
}

export default Contact