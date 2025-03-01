import { assets, infoList, toolsData } from '../assets/assets'
import React from 'react'
import { motion } from "motion/react" 

function About({isDark}) {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
    >
        <motion.h4 className='text-center mb-2 text-lg font-Ovo'
            initial={{opacity:0 , y:-20}}
            whileInView={{opacity:1 , y:0}}
            transition={{duration:0.5,delay:0.3}}
        >Introduction</motion.h4>
        <motion.h2 className='text-center text-5xl font-Ovo'
            initial={{opacity:0 , y:-20}}
            whileInView={{opacity:1 , y:0}}
            transition={{duration:0.5,delay:0.5}}
        >About Me</motion.h2>
        <motion.div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
            initial={{opacity:0 }}
            whileInView={{opacity:1 }}
            transition={{duration:0.8}}
        >
            <motion.div
                initial={{opacity:0 , scale:0.8 }}
                whileInView={{opacity:1 , scale:1 }}
                transition={{duration:0.6}}
                className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <img src={"https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"} alt='user' className='w-full rounded-3xls' priority />
            </motion.div>
            <motion.div className='flex-1'
                initial={{opacity:0 }}
                whileInView={{opacity:1 }}
                transition={{duration:0.6,delay:0.8}}
            >
                <motion.p className='mb-10 max-w-2xl font-Ovo'
                    initial={{opacity:0 }}
                    whileInView={{opacity:1 }}
                    transition={{duration:0.8,delay:0.8}}
                >
                    I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with  prestigious organizations, contributing to their success and growth.
                </motion.p>
                <motion.ul
                    initial={{opacity:0 }}
                    whileInView={{opacity:1 }}
                    transition={{duration:0.8 , delay:1}}
                    className='grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-2xl'>
                    {infoList.map(({icon,iconDark,title,description},index) => (
                        <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 hover:scale-[1.03]'
                        >
                            <img src={ isDark ? iconDark  : icon} alt={title} className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                        </li>
                    ))}
                </motion.ul>
                <motion.h4 className='my-6 text-gray-700 font-Ovo dark:text-white' 
                    initial={{ y:20 ,opacity:0 }}
                    whileInView={{ y:0 ,opacity:1 }}
                    transition={{duration:0.5,delay:1.3}}
                >
                    Tools I use
                </motion.h4>
                <motion.ul className='flex item-center gap-3 sm:gap-5'
                    initial={{opacity:0 }}
                    whileInView={{opacity:1 }}
                    transition={{duration:0.6,delay:1.5}}
                >
                    {toolsData.map((tool,index) => (
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 hover:scale-[1.03] duration-500' key={index}>
                            <img src={tool} alt='Tool' className='w-5 sm:w-7' />
                        </li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About