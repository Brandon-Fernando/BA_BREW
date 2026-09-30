import Popup from "./Popup";
import "./CartPopup.css"
import { motion } from "framer-motion";
import Button from "../Button/Button";
// import { containerVariants, itemVariants } from "../../animations/motionVariants";

const CartPopup = ({}) => {

  // const handleViewCart = () => {
  //   setCartPopup(null)
  //   setCartSidebarOpen(true)
  // }



  return(
    <Popup>
      <motion.div 
        className="cart-popup-content"
        // variants={containerVariants}
        // initial="hidden"
        // animate="visible"
      >
        {/* DRINK IMG  */}
        <div className="popup-drink">
          <div className="popup-circ"/>

          <img src="/Coffee.png" alt="Coffee" className="popup-coffee"/>
        </div>

        <span>added to cart</span>

        <div className="popup-buttons">
          <Button size="M" text="view cart"/>

          <Button size="M" text="view cart"/>
        </div>
        
        
      </motion.div>
    </Popup>
  )
}

export default CartPopup;