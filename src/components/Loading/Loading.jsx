import { motion } from "motion/react"
import { staggerContainer, staggerChildren } from "../../animations/motionVariants"
import LoadingAnimation from "./LoadingAnimation"

const Loading = ({isLoading, text}) => {

  return(
    <motion.div
      className="loading-container"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div variants={staggerChildren}>
        <LoadingAnimation isLoading={isLoading}/>
      </motion.div>

      <motion.span variants={staggerChildren}>
        {text}
      </motion.span>
    </motion.div>
  )
}

export default Loading;