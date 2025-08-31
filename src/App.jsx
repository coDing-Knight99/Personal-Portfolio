import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Fade } from "react-awesome-reveal";
import Navbar from './components/Navbar'
import VantaRings from './components/vantaring'
import {MyComponent} from './components/typingeffect.jsx'
import './App.css'
import GradientText from './components/gradienttext.jsx'
import me from './assets/me.jpg'
import { FaReact, FaNodeJs, FaPython, FaGit,FaGithub } from "react-icons/fa";
import AnimatedSkillCard from './components/animatedSkillCard.jsx';
import { div } from 'framer-motion/client';
function App() {
  const [count, setCount] = useState(0)
  const skills = [
  { Icon: FaReact, name: "React" },
  { Icon: FaNodeJs, name: "Node.js" },
  { Icon: FaPython, name: "Python" },
  { Icon: FaGit, name: "Git" },
];
  return (
    <>
        <Navbar/>
        {/* Home Content */}
        <div className='flex'>
        <div className='w-[65%] '>
          <VantaRings/>
        </div>
          <div className='w-[35%] flex p-25 justify-center text-4xl font-thin'>
            <MyComponent/>
          </div>
        </div>

        {/* About Section */}
        <div className='m-30'>
          <div className='flex justify-center text-align-center'>
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
            </div>
          </div>

          {/* Skills Section */}
          <div className='m-60'>
          <div className='flex justify-center text-align-center'>
            <GradientText
        text="Skills"
        gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
      />  
      </div>
      <div className='flex flex-wrap'>
        {skills.map((skill,i)=>{
          return(
            <div className='m-10 ' key={i}>
              <AnimatedSkillCard Icon={skill.Icon} name={skill.name}/>
            </div>
          )
        })
        }
      </div>
      </div>
        </div>
    </>
  )
}

export default App
