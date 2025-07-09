import React from 'react'
import { Facebook } from 'lucide-react'
import { Github } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Twitter } from 'lucide-react'
import { Instagram } from 'lucide-react'
const Footer = () => {
  return (
    <div className='bottom-0 flex items-center w-full text-white mt-1'>
      <div className='flex gap-4 ml-auto mr-auto mb-2'>
        <a href="https://www.facebook.com/jhunewally.esparcia" target='_blank'><Facebook/></a>
        <a href="https://github.com/jwesparcia" target='_blank'><Github/></a>
        <a href="https://x.com/jh72588" target='_blank'><Twitter/></a>
        <a href="https://www.linkedin.com/in/jhune-esparcia-50b838362/" target='_blank'><Linkedin/></a>
        <a href="https://www.instagram.com/jwcesparcia__/?next=%2F" target='_blank'><Instagram/></a>
      </div>
    </div>
  )
}

export default Footer