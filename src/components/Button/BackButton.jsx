import "./Button.css";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const BackButton = ({path}) => {
  const navigate = useNavigate();

  return(
    <motion.div 
      onClick={() => navigate(path)} 
      className="back-button"
      whileTap={{ scale: 0.8 }}
    >
      {/* <div className="back-button"> */}
        <i className="fa-solid fa-angle-left"/>
      {/* </div> */}
    </motion.div>
  )
}

export default BackButton;