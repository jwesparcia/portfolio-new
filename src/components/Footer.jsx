import React from 'react'
import { Facebook } from 'lucide-react'
import { Github } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Twitter } from 'lucide-react'
import { Instagram } from 'lucide-react'
const Footer = () => {
  return (
    <div className='bottom-0 flex items-center w-full text-white fixed'>
      <div className='flex gap-4 ml-auto mr-auto mb-2'>
        <a href="https://facebook.com" target='_blank'><Facebook/></a>
        <a href="https://github.com" target='_blank'><Github/></a>
        <a href="https://x.com" target='_blank'><Twitter/></a>
        <a href="https://linkedin.com" target='_blank'><Linkedin/></a>
        <a href="https://instagram.com" target='_blank'><Instagram/></a>
      </div>
    </div>
  )
}

export default Footer