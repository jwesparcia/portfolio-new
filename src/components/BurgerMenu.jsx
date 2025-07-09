import React from 'react'
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className=''>
        <button onClick={() => setIsOpen(!isOpen)} className='cursor-pointer md:hidden sm:block flex ml-auto'>
            {isOpen ? <X className='size-7 '/> : <Menu className='size-7'/>}
        </button>

        {isOpen && (
          <div className='flex flex-col md:hidden gap-1'>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/contact"}>Contacts</Link>
          </div>
        )}
    </div>
  )
}

export default BurgerMenu