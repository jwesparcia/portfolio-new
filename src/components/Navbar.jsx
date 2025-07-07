import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="p-3  font-bitcount font-bold text-[1.1rem]text-amber-50 ">
      <ul className="flex gap-15">
        <Link to={"/"} className="mr-auto ml-15">
          <img src="./src/assets/me.jpg.png" alt="Logo" width={"45px"} />
        </Link>
        <div className="flex flex-col justify-end md:flex-row md:gap-10 items-center mr-15 ">
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
      </ul>
    </nav>
  );
};

export default Navbar;
