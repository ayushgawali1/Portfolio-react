import { assets, workData } from '../assets/assets'
import React from 'react'
import { motion } from "motion/react" 

function Work({isDark}) {
    return (
        <motion.div id='work' className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1}}
        >
            <motion.h4 className='text-center mb-2 text-lg font-Ovo'
                initial={{opacity:0 , y:-20}}
                whileInView={{opacity:1 , y:0}}
                transition={{duration:0.5,delay:0.3}}
            >My Projects</motion.h4>
            <motion.h2 className='text-center text-5xl font-Ovo'
                initial={{opacity:0 , y:-20}}
                whileInView={{opacity:1 , y:0}}
                transition={{duration:0.5,delay:0.5}}
            >My latest Project</motion.h2>
            <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-2 font-Ovo'
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.5,delay:0.7}}
            >
                Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
            </motion.p>
            <motion.div className='grid grid-cols-auto my-10 gap-5 dark:text-black'
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.9,delay:0.9}}
            >
                {workData.map((project, index) => (
                    
                    <motion.div key={index}  style={{ background: `url(${project.bgImage})` , backgroundSize: 'contain' , backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }} className='aspect-square rounded-lg relative cursor-pointer group'
                        initial={{opacity:0 , scale:0}}
                        whileInView={{opacity:1 , scale:1}}
                        transition={{duration:0.4,delay:0.8}}
                    >
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-lime-300 transition '>
                                <img src={assets.send_icon} alt='send icon' className='w-5' />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <motion.span className='hover:cursor-pointer w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-16 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
                initial={{opacity:0 }}
                whileInView={{opacity:1 }}
                transition={{duration:0.5,delay:1.1}}
            >
                Show More
                <img src={ isDark ? assets.right_arrow_bold_dark : assets.right_arrow} alt='right arrow' className='w-4' />
            </motion.span>
        </motion.div>
    )
}

export default Work