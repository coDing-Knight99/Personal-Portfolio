import { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import Navbar from './components/Navbar'
import VantaRings from './components/vantaring'
import {MyComponent} from './components/typingEffect.jsx'
import './App.css'
import GradientText from './components/gradienttext.jsx'
import me from './assets/me.jpg'
import { FaReact, FaNodeJs, FaPython, FaGit, FaJava } from "react-icons/fa";
import { SiMongodb,SiTailwindcss,SiExpress,SiGithub,SiJavascript,SiCplusplus,SiC,SiLinkedin,SiCodechef,SiLeetcode,SiCodeforces } from 'react-icons/si';
import AnimatedSkillCard from './components/animatedSkillCard.jsx';
import Profile from './components/Profile.jsx';
import { code, div } from 'framer-motion/client';
import ProjectCard from './components/ProjectCard.jsx';
import EducationCard from './components/EducationCard.jsx';
import VantaHalo from './components/vantahalo.jsx';
function App() {
  const [count, setCount] = useState(0)
  const skills = [
  { Icon: FaReact, name: "React" },
  { Icon: FaNodeJs, name: "Node" },
  { Icon: FaPython, name: "Python" },
  { Icon: FaGit, name: "Git" },
  { Icon: SiGithub, name: "Git Hub" },
  { Icon: SiMongodb, name: "Mongo" },
  { Icon: SiTailwindcss, name: "Tailwind" },
  { Icon: SiExpress, name: "Express" },
  { Icon: FaJava, name: "Java" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiCplusplus, name: "C++" },
  { Icon: SiC, name: "C" },
];
const projects=[
  {title:"CineRush", description:"A Movie Ticket Booking Platform",image:"https://dx35vtwkllhj9.cloudfront.net/universalstudios/jurassic-world-rebirth/images/regions/us/updates1/onesheet.jpg",demo:"https://cine-rush-six.vercel.app/",code:"https://github.com/coDing-Knight99/CineRush"},
  {title:"Twitter Clone", description:"A Twitter(X) Frontend Clone",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOfF9HqKARerlalRgX3icOlm2Dj3CXhcY7ai_picX_7KqawOrLcg2HelTKt8RjIfFwQVE&usqp=CAU",demo:"https://cine-rush-six.vercel.app/",code:"https://github.com/coDing-Knight99/CineRush"},
  {title:"Sample 3",description:"Comming Soon...",image:"",demo:"",code:""},
]
  return (
    <div className="w-screen overflow-x-hidden">
        <Navbar/>
        {/* Home Content */}
        <div id="Home" className='flex xl:flex-row flex-col h-screen w-screen'>
  {/* Left side */}
  <div className='w-[65%] xl:block hidden'>
    <VantaRings />
  </div>

  {/* Right side wrapper */}
  <div className="relative xl:w-[35%] w-full flex justify-center">
    {/* Halo fills wrapper (not shrunk to 35%) */}
    <div className="absolute inset-0 xl:hidden block">
      <VantaHalo />
    </div>

    {/* MyComponent sits above, width constrained */}
    <div className="relative z-10 flex justify-center p-10 m-5 text-4xl font-thin bg-transparent">
      <MyComponent />
    </div>
  </div>
</div>


        {/* About Section */}
        <div id="About" className='xl:m-30 mt-50 sm:flex sm:flex-col sm:justify-center sm:items-center sm:text-center '>
          <div className='md:m-25 flex justify-center items-center'>
            <GradientText
        text="About Me"
        gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
      />
          </div>
          <div className='flex md:flex-row flex-col justify-center items-center md:items-start text-align-center xl:gap-50 gap-30 text-white m-10'>
            <div className='max-w-80 max-h-80'>
  <Fade>
    <div className="border-8 md:m-10 border-purple-500 rounded-lg shadow-2xl">
      <img src={me} alt="Me" className="object-cover" />
    </div>
  </Fade>
            </div>
            <div className=' md:m-10 text-center text-2xl md:w-[50%] w-full font-light'>
              
               <p className=''><GradientText
        text="I"
        gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
      />{" "} am a second-year Computer Science undergraduate at IIIT Kota, with a strong passion for competitive programming and backend development. Through competitive programming, I have developed a solid foundation in data structures, algorithms, and problem-solving techniques, which has strengthened my analytical thinking and ability to approach challenges with efficiency and precision.

Beyond coding contests, I am deeply interested in designing and implementing scalable backend systems. I enjoy exploring technologies that power modern applications, focusing on writing clean, maintainable, and optimized code that enhances performance and reliability.

Looking ahead, I aim to further deepen my skills in system design, software engineering, and backend technologies, while continuing to refine my competitive programming abilities. With curiosity as my driving force, I aspire to build innovative solutions that make a meaningful difference.</p>

            <div className='flex gap-3 mt-15 align-items-center justify-center'>
              <Profile Icon={SiLinkedin} link={"https://www.linkedin.com/in/dhruv-kanojia-8396a731a/"}/>
              <Profile Icon={SiLeetcode} link={"https://leetcode.com/u/coDing__Knight/"}/>
              <Profile Icon={SiCodechef} link={"https://www.codechef.com/users/codingknight99"}/>
              <Profile Icon={SiCodeforces} link={"https://codeforces.com/profile/CodingDkan"}/>
            </div>
            </div>
          </div>
          </div>
          {/* Skills Section */}
          <div id="Skill" className='mt-60'>
          <div className='m-25 flex justify-center text-center'>
            <GradientText
        text="Skills"
        gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
      />  
      </div>
      <div className='flex justify-center items-center'>
      <div className='flex flex-wrap items-center justify-center w-[65%] m-10'>
        {skills.map((skill,i)=>{
          return(
            <div className='m-5 ' key={i}>
              <AnimatedSkillCard Icon={skill.Icon} name={skill.name}/>
            </div>
          )
        })
        }
      </div>
      </div>
      </div>

      {/* Project Section */}
      <div id="Project" className='mt-60'>
        <div className='m-25 flex justify-center text-align-center'>
            <GradientText
        text="Projects"
        gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
      />
          </div>
      <div className='flex flex-wrap gap-10 justify-center m-30 align-items-center'>
        {projects.map((project,i) => {
          return(
            <div key={i}>
              <ProjectCard d={i} title={project.title} description={project.description} image={project.image} demo={project.demo} code={project.code}/>
            </div>
          )
        })}
      </div>
      </div>

        {/* Education Section */}
        <div id="Education" className='mt-60'>
          <div className='m-25 flex justify-center text-align-center'>
            <GradientText
        text="Education"
        gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
      />
          </div>

          <div className='flex flex-col justify-center items-center '>
            <EducationCard
  degree="B.Tech in Computer Science and Engineering"
  school="Indian Institute Of Information Technology, Kota"
  year="2024 – 2028"
  
/>
            <EducationCard
  degree="Senior Secondary Education (12th)"
  school="St. Mary's Convent School, Agra"
  year="2023 – 2024"
  
/>

          </div>
        </div>

        {/* Footer Section */}
        <div className='flex flex-col gap-10 justify-center items-center text-center m-20 p-10'>
          <GradientText className="text-2xl" text="Dhruv Kanojia" gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"/>
          <SiGithub onClick={()=>{
            window.open("https://github.com/coDing-Knight99/Personal-Portfolio","_blank");
          }} className="cursor-pointer w-12 h-12 text-indigo-500 dark:text-indigo-400" />
        </div>
    </div>
  )
}

export default App
