import { assets } from '../assets/assets'
import React from 'react'
import { motion } from "motion/react"

function Header({isDark}) {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div className='mt-16'
            initial={{ scale:0, opacity: 0 }}
            whileInView={{ scale:1, opacity: 1 }}
            transition={{duration:0.8,type:'spring'}}
        >
            <img src={"https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"} alt='' className='w-32 rounded-full' priority  />
        </motion.div>
        <motion.h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
            initial={{ y:-20, opacity: 0 }}
            whileInView={{ y:0, opacity: 1 }}
            transition={{duration:0.6,delay:0.3}}
        >
            Hi I'm Ayush Gawali
            <img src={assets.hand_icon} alt='' className='w-6' />
        </motion.h3>
        <motion.h1 className='text-3xl md:text-6xl lg:text-[66px] font-Ovo'
            initial={{ y:-30, opacity: 0 }}
            whileInView={{ y:0, opacity: 1 }}
            transition={{duration:0.8,delay:0.5}}
        >
            FullStack web developer and a passionate learner who loves to build things.
        </motion.h1>
        <motion.p className='max-w-2xl mx-auto font-Ovo'
            initial={{opacity: 0 }}
            whileInView={{opacity: 1 }}
            transition={{duration:0.6,delay:0.7}}
        >
            I am a FullStack web developer with a passion for building things. I love to learn new things and I am always looking for new challenges.
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a href="#contact"
                initial={{ y:30, opacity: 0 }}
                whileInView={{ y:0, opacity: 1 }}
                transition={{duration:0.6,delay:1}}
                className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent hover:dark:bg-darkHover/40'
            >
                Contact me
                <img src={assets.right_arrow_white} alt='' className='w-4' />
            </motion.a>
            <motion.a href="/sample.pdf" download
                initial={{ y:30, opacity: 0 }}
                whileInView={{ y:0, opacity: 1 }}
                transition={{duration:0.6,delay:1}}
                className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-black dark:bg-white hover:dark:bg-white/80'
            >
                My Resume
                <img src={assets.download_icon} alt='' className='w-4' />
            </motion.a>
        </div>
    </div>
  )
}

export default Header