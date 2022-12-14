import React from 'react'
import { motion } from 'framer-motion'

export function ShowButton({modalOpen,close,open}) {
  return (
    <motion.button
      whileHover={{scale:1.1}}
      whileTap={{
        scale:0.9,
        }}
      initial={{y:-20, opacity: 0 }}
      animate={{y:0, opacity: 100 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      onClick={()=>{
        (modalOpen ? close() : open())

        }}
      className=' text-violet-50 text-2xl md:text-3xl lg:text-4xl bg-gradient-to-br from-violet-500 to-violet-800 p-4 rounded-xl'
      >
        Show an advice
      </motion.button>
  )
}

