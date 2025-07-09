import React from 'react'
import ContactForm from '../components/ContactForm'
const Contact = () => {
  return (
    <div className=' md:w-3xl ml-auto mr-auto font-bitcount w-auto p-5'>
      <div className='text-[2rem] md:text-5xl font-bitcount text-center  mb-3'>
        <h1>Contact me</h1>
      </div>
      <div className=' mb-3'>
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