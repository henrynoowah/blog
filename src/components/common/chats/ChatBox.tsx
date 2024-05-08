import { motion } from 'framer-motion'

interface Params {
  isOpen: boolean
  onClose?: (close: boolean) => void
}

const ChatBox = ({ isOpen, onClose }: Params) => {
  return (
    <motion.div
      className={`w-[400px] max-w-full h-[480px] max-h-full bg-primary/20 end-0 rounded-[24px] p-4 shadow-xl backdrop-filter backdrop-blur-lg`}
      initial={{ opacity: 0 }}
      animate={!!isOpen ? 'open' : 'closed'}
      variants={{
        open: () => ({
          y: 0,
          opacity: 100,
          transition: { ease: 'easeInOut', duration: 0.5 }
        }),
        closed: () => ({
          y: 80,
          opacity: 0,
          transition: { ease: 'easeOut', duration: 0.5 }
        })
      }}
    >
      <div className="w-full h-full flex justify-center items-center text-light/60 font-semibold">
        Chat Bot Coming Soon...!
      </div>
    </motion.div>
  )
}

export default ChatBox
