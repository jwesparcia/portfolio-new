import React from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";


const Navbar = () => {

  return (
    <nav className="p-3  font-bitcount font-bold text-[1.1rem]text-amber-50">
      <ul className="flex gap-15 ">
        <Link to={"/"} className="mr-auto md:ml-15">
          <img src="./images/me.png" alt="Logo" width={"45px"} />
        </Link>
        <div className="md:flex md:flex-row justify-end md:gap-10 items-center mr-15 hidden">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contacts</Link>
          </li>
        </div>

        <div className="flex items-center">
           <BurgerMenu />
        </div>
        
      </ul>
     
    </nav>
  );
};

export default Navbar;
