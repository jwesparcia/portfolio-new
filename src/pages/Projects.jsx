import React from 'react'
import ProjectCard from '../components/ProjectCard'
const Projects = () => {
  return (
    <div className=''>
      <div className='w-3xl  mr-auto ml-auto p-4'>
          <div className='font-bitcount py-5 font-bold text-5xl text-center'>
            <h1>My Projects</h1>
           </div>
            <div className='space-y-3'>
              <ProjectCard
              title={"Guitar E-Commerce Website"}
              description={"This is a responsive guitar e-commerce website built using React and Tailwind CSS, featuring category filters, a shopping cart, and dynamic product listings. It was designed to provide a clean, user-friendly interface for browsing and purchasing guitars and accessories online."}
              link={"https://guitar-eccommerce-eight.vercel.app/"}
              sourceCode={"https://github.com/jwesparcia/guitar-ecommerce"}
              liveDemoUrl={"https://guitar-ecommerce-eight.vercel.app/"}
              githubUrl={"https://github.com/jwesparcia/guitar-ecommerce"}
            />

              <ProjectCard
              title={"To-Do List"}
              description={"This is a simple and responsive To-Do List application built using React, allowing users to add, delete, and mark tasks as completed. It was created to practice core React concepts like state management, component structure, and user interaction."}
              link={"https://guitar-eccommerce-eight.vercel.app/"}
              sourceCode={"https://github.com/jwesparcia/todo-list"}
              liveDemoUrl={""}
              githubUrl={"https://github.com/jwesparcia/todo-list"}
            />

            <ProjectCard
              title={"Calculator"}
              description={"This is a simple calculator application built with React that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It was designed to practice component structure, state handling, and real-time user input in a clean and responsive interface."}
              link={"https://guitar-eccommerce-eight.vercel.app/"}
              sourceCode={"https://github.com/jwesparcia/calculator"}
              liveDemoUrl={""}
              githubUrl={"https://github.com/jwesparcia/calculator"}
            />

             <ProjectCard
              title={"Contact Management"}
              description={"This is a console-based Contact Management application written in Java that allows users to add, view, update, and delete contacts through a simple text interface. It demonstrates fundamental Java programming concepts such as object-oriented design, file handling, and user input processing in a command-line environment."}
              link={"N/A"}
              sourceCode={"https://github.com/jwesparcia/ContactManagement"}
              githubUrl={"https://github.com/jwesparcia/ContactManagement"}
            />
            </div>
      </div>
    </div>
  )
}

export default Projects