'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Params {
  children: ReactNode
}

const PostTemplate = ({ children }: Params) => {
  return (
    <motion.div
      className="w-full flex justify-center"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default PostTemplate
