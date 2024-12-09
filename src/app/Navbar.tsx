import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      <nav className= 'flex bg-[#044e83] h-16 w-full items-center justify-between md:h-20 lg:w-[100%] xl:w-[full] fixed z-30  '>
      <div> <a href="/"> 
          <Image
            src="/logo.png"
            alt="Governor logo"
            height={115}
            width={90}
            className='ml-6 mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90px] md:h-full'
          />
          </a>
     </div>
     <div>
     <h1 className='text-shadow lg:block xl:text-xl text-xl my-5 mx-20 text_shadow font-bold text-[#b9d8f3] '>Tuition Free Education Program on Latest Technologies</h1> 
     <h1 className='text_shadow text-[1.125rem] font-extrabold text-[#b9d8f3] text-center lg:hidden'>Tution Free Program</h1>
     </div> 
        <div className='items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10' >
            <ul className= 'flex items-center space-x-10 mx-12 '>
               <li><a href="/" className=' text-white '>Home</a></li>
               <li><a href="/about" className='text-white '>About</a></li>
               <li><a href="/jobs" className='text-white '>Jobs</a></li>
               <li><a href="/result" className='text-white'>Result</a></li>
               <li><a href="/courses" className='text-white'>Courses</a></li> 
            </ul>
        </div>
    </nav>
    
    </div>
  )
}

export default Navbar
