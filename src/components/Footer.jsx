import { assets } from '../assets/assets'
import React from 'react'

function Footer({isDark}) {
  return (
    <div className='mt-20 '>
      <div className='text-center'>
        <h1 className={`font-semibold text-4xl mx-auto mb-2 ${isDark ? "text-white" : "text-black" }`}>
          Ayush
        </h1>
        <div className='w-max flex items-center gap-2 mx-auto'>
          <img src={ isDark ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
          ayushgawali.12345@gmail.com
        </div>
      </div>
      <div className='text-center md:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>ⓒ Ayush Gawali - All Right Reserved</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a className='px-2 py-1 hover:text-blue-500' target='_blank' href="https://github.com/ayushgawali1">Github</a></li>
          <li><a className='px-2 py-1 hover:text-blue-500' target='_blank' href="https://www.linkedin.com/in/ayush-gawali-485093183/">Linkend</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer