import Popup from "./Popup";
import "./CartPopup.css"
import { motion } from "framer-motion";
import Button from "../Button/Button";
import { useLayoutEffect, useRef } from "react";
import HandwritingText from "../HandwritingText";
import { staggerContainer, staggerChildren } from "../../animations/motionVariants";
import { useNavigate } from "react-router-dom";

const CartPopup = ({setCartPopupOpen, setCartSidebarOpen}) => {
  const navigate = useNavigate();
  const handleViewCart = () => {
    setCartPopupOpen(false)
    setCartSidebarOpen(true)
  }

  const handleAddMore = () => {
    setCartPopupOpen(false)
    navigate(-1)
  }


  return(
    <Popup>
      <motion.div 
        className="cart-popup-wrapper"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={staggerChildren} className="cart-popup-title">
          <span>Added</span>
          <span>To Cart</span>
        </motion.div>

        <motion.div variants={staggerChildren} className="popup-icon-wrapper">
          <img src="/Popup/Popup-Icon.png" alt="Popup Icon" className="popup-icon"/>
        </motion.div>


        {/* BUTTONS  */}
        <div className="popup-buttons">
          <motion.button onClick={() => handleViewCart()} variants={staggerChildren} className="popup-button button light">view cart</motion.button>

          <motion.button onClick={() => handleAddMore()} variants={staggerChildren} className="popup-button button red">add more items</motion.button>
        </div>

      </motion.div>
    </Popup>
  )
}

export default CartPopup;