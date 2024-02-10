import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import Avatar2 from "../../public/Avatar2.png";
import html from "../../public/tech_stack/html.png";
import css from "../../public/tech_stack/css.png";
import react from "../../public/tech_stack/react.png";
import next from "../../public/tech_stack/next.png";
import java from "../../public/tech_stack/java.png"
import javascript from "../../public/tech_stack/javascript.png"
import bootstrap from "../../public/tech_stack/bootstrap.png"
import tailwind from "../../public/tech_stack/tailwind.png"
import git from "../../public/tech_stack/git.png"

export default function Home() {
  return (
    <div>
      <Head>

      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Developed by Manu</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill className="cursor-pointer text-2xl" /></li>
              <li><a className="bg-gradient-to-t from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Manu Bhardwaj</h2>
            <h3 className="text-2xl py-2">Frontend Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">Frontend developer who loves creating beautiful and functional web pages and apps. Passionate about learning new technologies and best practices.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
          <div className="relative mx-auto background-transparent w-80 h-80 mt-20 rounded-full overflow-hidden">
            <Image className="w-120 h-80 rounded-full" alt="Avatar" src={Avatar2} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Technologies I work on</h3>
            <p className="text-md py-2 leading-8 text-gray-800">Lorem ipsum dolor sit amet consectetur <span className="text-teal-500">adipisicing</span> elit. Error, corrupti blanditiis quae placeat <span className="text-teal-500">maxime</span> similique!</p>
            <p className="text-md py-2 leading-8 text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ab consequuntur quia, iusto esse eaque provident ducimus distinctio repudiandae perferendis!</p>
          </div>
          <div>
            <div className="flex">
              <Image alt="react" src={react} width={100} height={100}></Image>
              <Image alt="next" src={next} width={100} height={100}></Image>
              <Image alt="java" src={java} width={100} height={100}></Image>
              <Image alt="javascript" src={javascript} width={100} height={100}></Image>
              <Image alt="bootstrap" src={bootstrap} width={100} height={100}></Image>
              <Image alt="tailwind" src={tailwind} width={100} height={100}></Image>
              <Image alt="html" src={html} width={100} height={100}></Image>
              <Image alt="css" src={css} width={100} height={100}></Image>
              <Image alt="git" src={git} width={100} height={100}></Image>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
