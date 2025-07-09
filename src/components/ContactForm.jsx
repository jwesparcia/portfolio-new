import React from 'react'

const ContactForm = ({name,email,message}) => {
  return (
    <div className=' border-4 rounded-2xl p-5 w-auto'>
        <form action="https://formsubmit.co/jhuneesparcia1@gmail.com" method="POST" className='flex w-full flex-col'>
          <div className='flex mb-3'>
             <label className='w-24 flex' htmlFor="email"><span className=' text-end  w-24 mr-3 my-auto'> {name}</span>
             </label>
             <input type="text"  name="Name" className='p-3 w-full md:w-[35rem] border-2' required/>
          </div>

          <div className='flex mb-3'>
             <label className='my-auto w-24 flex ' htmlFor="email"><span className='text-end mr-3  w-24  '> {email}</span>
             </label>
             <input type="email" name="Email" className=' p-3 w-full md:w-[35rem] border-2' required/>
          </div>

           <div className='flex mb-3'>
             <label className='my-auto w-24  flex ' htmlFor="email"><span className=' w-24 text-end mr-3 '> {message}</span>
             </label>
             <textarea name="Message" className=' p-3 w-full h-44 md:w-[35rem] border-2' required />
          </div>

          <div className='border-2 w-auto ml-auto px-7 py-2 mr-auto cursor-pointer'>
            <button className='w-full cursor-pointer'>Submit</button>
          </div>
        </form>
      </div>
      
  )
}

export default ContactForm