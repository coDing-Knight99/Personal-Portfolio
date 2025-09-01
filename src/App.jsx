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
import { div } from 'framer-motion/client';
import ProjectCard from './components/ProjectCard.jsx';
import EducationCard from './components/EducationCard.jsx';
function App() {
  const [count, setCount] = useState(0)
  const skills = [
  { Icon: FaReact, name: "React" },
  { Icon: FaNodeJs, name: "Node" },
  { Icon: FaPython, name: "Python" },
  { Icon: FaGit, name: "Git" },
  { Icon: SiGithub, name: "Express" },
  { Icon: SiMongodb, name: "Mongo" },
  { Icon: SiTailwindcss, name: "Tailwind" },
  { Icon: SiExpress, name: "Express" },
  { Icon: FaJava, name: "Java" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiCplusplus, name: "C++" },
  { Icon: SiC, name: "C" },
];
const projects=[
  {title:"CineRush", description:"A Movie Ticket Booking Platform",image:"https://dx35vtwkllhj9.cloudfront.net/universalstudios/jurassic-world-rebirth/images/regions/us/updates1/onesheet.jpg"},
  {title:"Twitter Clone", description:"A Twitter(X) Frontend Clone",image:"https://pbs.twimg.com/media/GhtAbrbWkAALQLt?format=jpg&name=4096x4096"},
  {title:"Sample 3",description:"Comming Soon...",image:""},
]
  return (
    <>
        <Navbar/>
        {/* Home Content */}
        <div id="Home" className='flex'>
        <div className='w-[65%] md:block hidden '>
          <VantaRings/>
        </div>
          <div className='md:w-[35%] flex p-25 justify-center text-4xl font-thin'>
            <MyComponent/>
          </div>
        </div>

        {/* About Section */}
        <div id="About" className='m-30'>
          <div className='m-25 flex justify-center text-align-center'>
            <GradientText
        text="About Me"
        gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
      />
          </div>
          <div className='flex justify-center text-align-center gap-50 text-white m-10'>
            <div>
  <Fade>
    <div className=" border-8 m-10 border-purple-500 rounded-lg shadow-2xl">
      <img src={me} alt="Me" className=" w-80 h-80 object-cover" />
    </div>
  </Fade>
            </div>
            <div className=' m-10 text-2xl w-[50%] font-light gap-1'>
              
               <p><GradientText
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

          {/* Skills Section */}
          <div id="Skill" className='m-60'>
          <div className='m-25 flex justify-center text-align-center'>
            <GradientText
        text="Skills"
        gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
      />  
      </div>
      <div className='flex flex-wrap align-items-center justify-center m-10'>
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
              <ProjectCard d={i} title={project.title} description={project.description} image={project.image}/>
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

          <div className='justify-items-center align-items-center '>
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
    </>
  )
}

export default App
