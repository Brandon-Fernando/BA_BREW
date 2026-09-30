import "./Popup.css"
import { motion } from "framer-motion";
// import { popupScale } from "../../animations/motionVariants";
import { popupScale } from "../../animations/motionVariants";

const Popup = ({children}) => {

  return(
    <div className="popup-container">
      <motion.div 
        className="popup-content"
        variants={popupScale}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Popup;