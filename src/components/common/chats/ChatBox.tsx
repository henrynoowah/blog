import { motion } from 'framer-motion'

interface Params {
  isOpen: boolean
  onClose?: (close: boolean) => void
}

const ChatBox = ({ isOpen, onClose }: Params) => {
  return (
    <motion.div
      className={`absolute w-full h-full md:max-h-[80vh] bottom-0 end-0 px-[24px] py-[100px] md:pb-[160px]
            flex justify-end items-center z-50 pointer-events-none`}
      initial={{ opacity: 0 }}
      animate={!!isOpen ? 'open' : 'closed'}
      variants={{
        open: () => ({
          y: 0,
          opacity: 100,
          transition: { ease: 'easeInOut', duration: 0.5 }
        }),
        closed: () => ({
          y: 40,
          opacity: 0,
          transition: { ease: 'backInOut', duration: 0.2 }
        })
      }}
    >
      <div
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        className={`w-full h-full max-w-full md:max-w-[400px] bg-primary/20 end-0 rounded-[24px] p-4 shadow-xl backdrop-filter backdrop-blur-lg`}
        onClick={() => {}}
      >
        <div className="w-full h-full flex justify-center items-center text-light/60 font-semibold">
          Bot Chat Coming Soon...!
        </div>
      </div>
      {/* </div> */}
    </motion.div>
  )
}

export default ChatBox
