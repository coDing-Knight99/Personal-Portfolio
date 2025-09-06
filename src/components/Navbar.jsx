import React from 'react'
import NavGradientText from './navgradient'
import { Link } from 'react-scroll';
import { MenuIcon } from 'lucide-react';
const Navbar = () => {
  return (
    <div className='flex justify-between md:gap-10 p-7 text-lg font-semibold font-josefin sm:max-h-25 w-full sticky top-0 z-10 bg-black'>
        <div className='md:w-15 flex md:h-15 md:ml-20'>
            <h1 className='font-josefin text-5xl text-white'>D</h1>
            <h1 className='font-josefin text-5xl text-red-600'>/</h1>
            <h1 className='font-josefin text-5xl text-white'>K</h1>
        </div>
        <div className='flex justify-between text-[#00FFFF] gap-10 mr-10 ml-10 font-josefin'>
        <p className="cursor-pointer hover:-translate-y-1 duration-300 lg:block hidden"><Link to="Home" smooth={true} duration={500} className="cursor-pointer px-4 py-2"><NavGradientText text="Home" gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"/></Link></p>
        <p className="cursor-pointer hover:-translate-y-1 duration-300 lg:block hidden"><Link to="About" smooth={true} duration={500} className="cursor-pointer px-4 py-2"><NavGradientText text="About" gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"/></Link></p>
        <p className="cursor-pointer hover:-translate-y-1 duration-300 lg:block hidden"><Link to="Skill" smooth={true} duration={500} className="cursor-pointer px-4 py-2"><NavGradientText text="Skills" gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"/></Link></p>
        <p className="cursor-pointer hover:-translate-y-1 duration-300 lg:block hidden"><Link to="Project" smooth={true} duration={500} className="cursor-pointer px-4 py-2"><NavGradientText text="Projects" gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"/></Link></p>
        <p className="cursor-pointer hover:-translate-y-1 duration-300 lg:block hidden"><Link to="Education" smooth={true} duration={500} className="cursor-pointer px-4 py-2"><NavGradientText text="Education" gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"/></Link></p>
        <div className='cursor-pointer lg:hidden flex justify-center items-center'><MenuIcon /></div>
        </div>
    </div>
  )
}

export default Navbar
