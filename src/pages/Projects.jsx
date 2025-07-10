import React from "react";
import ProjectCard from "../components/ProjectCard";
import { MoveRight } from "lucide-react";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="">
      <div className="md:w-3xl w-auto mr-auto ml-auto p-4 md:p-0 font-bitcount">
        
        <div className=" py-5 font-bold text-[2rem] md:text-5xl text-center">
          <h1>My Projects</h1>
        </div>
        <div className="space-y-3 mb-2">
          <ProjectCard
            title={"Guitar E-Commerce Website"}
            description={
              "This is a responsive guitar e-commerce website built using React and Tailwind CSS, featuring category filters, a shopping cart, and dynamic product listings. It was designed to provide a clean, user-friendly interface for browsing and purchasing guitars and accessories online."
            }
            link={"https://guitar-eccommerce-eight.vercel.app/"}
            sourceCode={"https://github.com/jwesparcia/guitar-ecommerce"}
            liveDemoUrl={"https://guitar-ecommerce-eight.vercel.app/"}
            githubUrl={"https://github.com/jwesparcia/guitar-ecommerce"}
          />

          <ProjectCard
            title={"To-Do List"}
            description={
              "This is a simple and responsive To-Do List application built using React, allowing users to add, delete, and mark tasks as completed. It was created to practice core React concepts like state management, component structure, and user interaction."
            }
            link={"https://guitar-eccommerce-eight.vercel.app/"}
            sourceCode={"https://github.com/jwesparcia/todo-list"}
            liveDemoUrl={""}
            githubUrl={"https://github.com/jwesparcia/todo-list"}
          />

          <ProjectCard
            title={"Calculator"}
            description={
              "This is a simple calculator application built with React that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It was designed to practice component structure, state handling, and real-time user input in a clean and responsive interface."
            }
            link={"https://guitar-eccommerce-eight.vercel.app/"}
            sourceCode={"https://github.com/jwesparcia/calculator"}
            liveDemoUrl={""}
            githubUrl={"https://github.com/jwesparcia/calculator"}
          />

          <ProjectCard
            title={"Contact Management"}
            description={
              "This is a console-based Contact Management application written in Java that allows users to add, view, update, and delete contacts through a simple text interface. It demonstrates fundamental Java programming concepts such as object-oriented design, file handling, and user input processing in a command-line environment."
            }
            link={"N/A"}
            sourceCode={"https://github.com/jwesparcia/ContactManagement"}
            githubUrl={"https://github.com/jwesparcia/ContactManagementassaasas"}
          />
        </div>
        <div className=" p-2.5 w-2xs text-[0.9rem] ml-auto mr-auto flex justify-center font-bitcount md:text-[1.4rem] md:p-0 ">
          <Link to={"/contact"} className="flex gap-1.5 cursor-pointer">Contact me <MoveRight className="size-5 md:size-7 md:mt-0.5" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
