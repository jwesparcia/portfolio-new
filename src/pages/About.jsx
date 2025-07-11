import React from "react";
import { CircleSmall } from "lucide-react";
import { MoveRight } from "lucide-react";
import { SquareCode } from "lucide-react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="flex bg-[#242323] rounded-3xl m-5 md:m-0">
      <div className="-red-400 w-auto ml-auto mr-auto text-left grid md:grid-cols-2 md:w-3xl  md:space-x-3">
        <div className="font-bitcount px-4 font-medium  ">
          <div className="text-3xl  md:text-5xl mt-10 mb-5 text-center">
            <h1>About Me</h1>
          </div>
          <div className="mb-4  flex">
            <CircleSmall className="w-12 mr-3" />
            <p className="text-[0.9rem] md:text-[1rem]">
              Hi, I’m <span className="font-bold">Jhune Wally Esparcia</span>, a
              front-end developer passionate about building beautiful,
              user-friendly web experiences.
            </p>
          </div>
          <div className="flex">
            <CircleSmall className="w-10 mr-3" />
            <p className="text-[0.9rem] md:text-[1rem]">
              I work mainly with JavaScript, React, and Node.js, and I’m also
              experienced in Java, C# and Python.
            </p>
          </div>
          <div className=" w-2xs my-4 flex flex-col ml-auto mr-auto items-center ">
            <div className="flex">
              <h2>TECH STACK</h2> <SquareCode className="h-5 mt-[0.5px] " />
            </div>
            <div className="flex">
              <div className="mt-0">
                <MoveRight className="pb-2 size-6.5" />
              </div>
              <span className="fa-brands fa-html5 size-5"></span>
              <span className="fa-brands fa-css3 size-5"></span>
              <span className="fa-brands fa-react size-5"></span>
              <span className="fa-brands fa-java size-5"></span>
              <span className="fa-brands fa-js size-5"></span>
            </div>
          </div>

          <div className="">
            <Link to={"/projects"} className="flex justify-center">
              <h1 className="mr-1">View my projects</h1> <MoveRight />
            </Link>
          </div>
        </div>
        <div className="m-5">
          <div>
            <img
              src="./images/me.png"
              alt="Picture"
              className="rounded-3xl md:size-fit size-2/4 mr-auto ml-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
