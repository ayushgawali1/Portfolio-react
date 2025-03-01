import { assets, serviceData } from '../assets/assets'
import React from 'react'
import { motion } from "motion/react" 


function Services() {
  return (
    <motion.div id='services' className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
    >
        <motion.h4 className='text-center mb-2 text-lg font-Ovo'
          initial={{opacity:0 , y:-20}}
          whileInView={{opacity:1 , y:0}}
          transition={{duration:0.5,delay:0.3}}
        >What I offer</motion.h4>
        <motion.h2 className='text-center text-5xl font-Ovo'
          initial={{opacity:0 , y:-20}}
          whileInView={{opacity:1 , y:0}}
          transition={{duration:0.5,delay:0.5}}
        >My Services</motion.h2>
        <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-2 font-Ovo' 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.5,delay:0.7}}
        >
          I am a FullStack Web Developer pursuing degree in PCCOER for computer engineering . 
        </motion.p>
        <motion.div className='grid grid-cols-auto gap-6 my-10'
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.6,delay:0.9}}
        >
          {serviceData.map(({icon,title,description,link},index) => (
            <motion.div 
              initial={{opacity:0 , scale:0 , transition:{duration:0.3,delay:0.5}}}
              whileInView={{opacity:1 , scale:1 ,transition:{duration:0.3,delay:0.5}}}
              whileHover={{ y: -10 }}
              key={index}
              className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
            >
                <img src={icon} alt='' className='w-10' />
                <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                  {description}
                </p>
                <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                  Read More
                  <img src={assets.right_arrow} className='w-4' alt='' />
                </a>
            </motion.div>
          ))}
        </motion.div>
    </motion.div>
  )
}

export default Services