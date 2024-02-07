'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Params {
  children: ReactNode
}

const PostTemplate = ({ children }: Params) => {
  return (
    <motion.div
      className="w-full max-w-2xl"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default PostTemplate
