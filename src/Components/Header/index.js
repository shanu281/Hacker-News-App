import React from 'react'
import {AiFillTwitterCircle, AiFillInstagram,AiFillFacebook, AiFillYoutube } from 'react-icons/ai'
const Header = () => {
  return (
    <header className=' bg-black w-full h-[80px] '>
      <div className='  h-full  container mx-auto flex items-center justify-between '>
        {/* Logo  */}
        <div className='flex items-center gap-2'>
          <div className='w-[40px] h-[40px]'>
            <img className='h-full w-full overflow-hidden' src='HN-Logo.webp' alt='logo-image'/>
          </div>
          <div className='font-primary text-white text-4xl '>Hacker News</div>
        </div>
        {/* Social Media  */}
        <div className='flex text-white items-center gap-2'>
          Follow us on :
          <div><a href='#'> <AiFillFacebook className='text-blue-500 text-2xl  rounded-full' /> </a></div> 
          <div><a href='#'> <AiFillInstagram className='text-pink-500 text-2xl rounded-full' /> </a></div> 
          <div><a href='#'> <AiFillTwitterCircle className='text-white-500 text-2xl rounded-full' /> </a></div>
          <div><a href='#'> <AiFillYoutube className=' text-2xl text-red-600 rounded-full' /> </a></div> 
        </div>
      </div>
    </header>
  )
}

export default Header