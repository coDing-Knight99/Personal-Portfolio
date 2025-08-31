import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between gap-10 p-8 text-lg font-semibold font-josefin sm:max-h-25 sticky top-0 z-10'>
        <div className='w-15 flex h-15 ml-20'>
            <h1 className='font-josefin text-5xl text-white'>D</h1>
            <h1 className='font-josefin text-5xl text-red-600'>/</h1>
            <h1 className='font-josefin text-5xl text-white'>K</h1>
        </div>
        <div className='flex justify-between text-[#00FFFF] gap-10 mr-10 ml-10 font-josefin'>
        <p onClick={scrollTo(0,0)} className="cursor-pointer hover:-translate-y-1 duration-300 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Home</p>
        <p className="cursor-pointer hover:-translate-y-1 duration-300 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">About</p>
        <p className="cursor-pointer hover:-translate-y-1 duration-300 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Skills</p>
        <p className="cursor-pointer hover:-translate-y-1 duration-300 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Projects</p>
        <p className="cursor-pointer hover:-translate-y-1 duration-300 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Education</p>
        </div>
    </div>
  )
}

export default Navbar
