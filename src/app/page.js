"use client";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import Avatar from "../../public/Avatar.png";
import html from "../../public/tech_stack/html.png";
import css from "../../public/tech_stack/css.png";
import react from "../../public/tech_stack/react.png";
import next from "../../public/tech_stack/next.png";
import java from "../../public/tech_stack/java.png";
import javascript from "../../public/tech_stack/javascript.png";
import bootstrap from "../../public/tech_stack/bootstrap.png";
import tailwind from "../../public/tech_stack/tailwind.png";
import git from "../../public/tech_stack/git.png";
import { useState } from "react";
import { TailwindcssButtons } from "./components/TailwindcssButtons";
import { TextGenerateEffectDemo } from "./components/TGE";
import { Sparkles } from "./components/Sparkles";
import { ThreeDCardDemo } from "./components/ThreeDNetflix";
import { ThreeDSavvySquare } from "./components/ThreeDSavvySquare";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head></Head>
      <main className="bg-white dark:bg-gray-900 dark:text-white">
        <Sparkles />
        <section id="about" className="min-h-screen">
          <nav className="py-5 mb-12 flex  justify-end">
            {/* <h1 className="text-xl font-burtons cursor-default">
              Developed by Manu
            </h1> */}
            <ul className="flex items-center justify-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a href="./Resume.pdf" download="Resume.pdf">
                  <TailwindcssButtons />
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center">{/* <TRC /> */}</div>
          <div className="text-center p-10 px-20">
            <TextGenerateEffectDemo className="leading-8" />
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <a target="_blank" href="https://github.com/ManuBhardwaj001">
              <AiFillGithub className="cursor-pointer"></AiFillGithub>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/manu-bhardwaj-467290282/"
            >
              <AiFillLinkedin />
            </a>
          </div>
          <div className="relative mx-auto background-transparent w-80 h-80 mt-20 rounded-full overflow-hidden">
            <Image
              className=" h-80 rounded-full"
              alt="Avatar"
              src={Avatar}
              fill
              unoptimized
            />
          </div>
        </section>
        <section>
          <div
            className="flex shadow-lg py-[5rem] mx-6 sm:mx-8 md:mx-8 lg:mx-8 xl:mx-10
 rounded-xl flex-col items-center mt-10 space-y-4 dark:shadow-white"
          >
            {/* Top row */}
            <div className="flex">
              <Image
                className="cursor-pointer transition-transform duration-500 transform hover:rotate-180"
                alt="react"
                src={react}
                width={100}
                height={100}
                unoptimized
              />
            </div>
            {/* Middle row */}
            <div className="flex space-x-4">
              <Image
                className="cursor-pointer transition-transform duration-1000 transform hover:scale-x-[-1]"
                alt="next"
                src={next}
                width={100}
                height={100}
                unoptimized
              />
              <Image
                className="cursor-pointer transition-transform duration-1000 transform hover:scale-x-[-1]"
                alt="bootstrap"
                src={bootstrap}
                width={100}
                height={100}
                unoptimized
              />

              <Image
                className="cursor-pointer transition-transform duration-1000 transform hover:scale-x-[-1]"
                alt="html"
                src={html}
                width={100}
                height={100}
                unoptimized
              />
            </div>
            {/* Bottom row */}
            <div className="flex space-x-4">
              <Image
                className="cursor-pointer transition-transform duration-1000 transform hover:scale-x-[-1]"
                alt="javascript"
                src={javascript}
                width={100}
                height={100}
                unoptimized
              />
              <Image
                className="cursor-pointer transition-transform duration-1000 transform hover:scale-x-[-1]"
                alt="java"
                src={java}
                width={100}
                height={100}
                unoptimized
              />
              <Image
                className="cursor-pointer transition-transform duration-1000 transform hover:scale-x-[-1]"
                alt="git"
                src={git}
                width={100}
                height={100}
                unoptimized
              />
            </div>
          </div>
        </section>
        <section id="projectsSection">
          <div className="text-center pt-10 mt-5 text-5xl -mb-10 text-teal-600 font-medium drop-shadow-lg">
            My Projects
          </div>
          <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            <ThreeDCardDemo />
            <ThreeDSavvySquare />
          </div>
        </section>
      </main>
    </div>
  );
}
