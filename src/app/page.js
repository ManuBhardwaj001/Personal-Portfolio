"use client"
import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import Avatar from "../../public/Avatar.png";
import html from "../../public/tech_stack/html.png";
import css from "../../public/tech_stack/css.png";
import react from "../../public/tech_stack/react.png";
import next from "../../public/tech_stack/next.png";
import java from "../../public/tech_stack/java.png"
import javascript from "../../public/tech_stack/javascript.png"
import bootstrap from "../../public/tech_stack/bootstrap.png"
import tailwind from "../../public/tech_stack/tailwind.png"
import git from "../../public/tech_stack/git.png"
import { useState } from "react";
import { TailwindcssButtons } from "./components/TailwindcssButtons";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (

    <div className={darkMode ? "dark" : ""}>
      <Head>

      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen">
          <nav className="py-5 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons cursor-default">Developed by Manu</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" /></li>
              {/* <li>className="bg-gradient-to-t from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li> */}
              <li><a href="./Resume.pdf" download="Resume.pdf" ><TailwindcssButtons /></a></li>

            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Manu Bhardwaj</h2>
            <h3 className="text-2xl py-2">Frontend Developer</h3>
            <p className="text-md py-5 px-10 leading-8 text-gray-800 dark:text-white">As a frontend developer, I specialize in crafting user-friendly and visually appealing web pages. Each project is an opportunity for me to explore design nuances and deliver a seamless user experience.  I&apos;m dedicated to staying updated with the latest technologies and implementing practical solutions. With an eye for detail and a commitment to industry best practices, I look forward to contributing to your projects.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <a href="https://github.com/ManuBhardwaj001">
              <AiFillGithub className="cursor-pointer"></AiFillGithub>
            </a>
            <a href="https://www.linkedin.com/in/manu-bhardwaj-467290282/">
              <AiFillLinkedin />
            </a>
          </div>
          <div className="relative mx-auto background-transparent w-80 h-80 mt-20 rounded-full overflow-hidden">
            <Image className=" h-80 rounded-full" alt="Avatar" src={Avatar} fill />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Technologies I work on</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">Lorem ipsum dolor sit amet consectetur <span className="text-teal-500">adipisicing</span> elit. Error, corrupti blanditiis quae placeat <span className="text-teal-500">maxime</span> similique!</p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ab consequuntur quia, iusto esse eaque provident ducimus distinctio repudiandae perferendis!</p>
          </div>
          <div className="flex shadow-lg py-10 px-8 rounded-xl flex-col items-center mt-10 space-y-4 dark:shadow-white">
            {/* Top row */}
            <div className="flex space-x-4">
              <Image className="cursor-pointer transition-transform duration-500 transform hover:rotate-180" alt="react" src={react} width={100} height={100} />
            </div>
            {/* Middle row */}
            <div className="flex space-x-4">
              <Image className="cursor-pointer transition-transform duration-1000 transform hover:scale-x-[-1]" alt="next" src={next} width={100} height={100} />
              <Image className="cursor-pointer transition-transform duration-1000 transform hover:scale-x-[-1]" alt="bootstrap" src={bootstrap} width={100} height={100} />
              <Image className="cursor-pointer transition-transform duration-1000 transform hover:scale-x-[-1]" alt="html" src={html} width={100} height={100} />
            </div>
            {/* Bottom row */}
            <div className="flex space-x-4">
              <Image className="cursor-pointer transition-transform duration-1000 transform hover:scale-x-[-1]" alt="javascript" src={javascript} width={100} height={100} />
              <Image className="cursor-pointer transition-transform duration-1000 transform hover:scale-x-[-1]" alt="java" src={java} width={100} height={100} />
              <Image className="cursor-pointer transition-transform duration-1000 transform hover:scale-x-[-1]" alt="git" src={git} width={100} height={100} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

