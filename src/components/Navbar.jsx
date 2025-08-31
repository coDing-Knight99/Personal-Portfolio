import React from 'react'
import NavGradientText from './navgradient'
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div className='flex justify-between gap-10 p-8 text-lg font-semibold font-josefin sm:max-h-25 sticky top-0 z-10'>
        <div className='w-15 flex h-15 ml-20'>
            <h1 className='font-josefin text-5xl text-white'>D</h1>
            <h1 className='font-josefin text-5xl text-red-600'>/</h1>
            <h1 className='font-josefin text-5xl text-white'>K</h1>
        </div>
        <div className='flex justify-between text-[#00FFFF] gap-10 mr-10 ml-10 font-josefin'>
        <p className="cursor-pointer hover:-translate-y-1 duration-300 "><Link to="Home" smooth={true} duration={500} className="cursor-pointer px-4 py-2"><NavGradientText text="Home" gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"/></Link></p>
        <p className="cursor-pointer hover:-translate-y-1 duration-300 "><Link to="About" smooth={true} duration={500} className="cursor-pointer px-4 py-2"><NavGradientText text="About" gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"/></Link></p>
        <p className="cursor-pointer hover:-translate-y-1 duration-300 "><Link to="Skill" smooth={true} duration={500} className="cursor-pointer px-4 py-2"><NavGradientText text="Skills" gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"/></Link></p>
        <p className="cursor-pointer hover:-translate-y-1 duration-300 "><Link to="Project" smooth={true} duration={500} className="cursor-pointer px-4 py-2"><NavGradientText text="Projects" gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"/></Link></p>
        <p className="cursor-pointer hover:-translate-y-1 duration-300 "><Link to="Education" smooth={true} duration={500} className="cursor-pointer px-4 py-2"><NavGradientText text="Education" gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"/></Link></p>
        </div>
    </div>
  )
}

export default Navbar
