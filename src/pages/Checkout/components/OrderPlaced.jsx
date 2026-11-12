import { motion, stagger } from "motion/react";
import { staggerContainer, staggerChildren } from "../../../animations/motionVariants";
import { useNavigate } from "react-router-dom";

const OrderPlaced = () => {
  const navigate = useNavigate();

  return(
    <motion.div 
      className="order-placed-container"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="order-placed-illustration">
        <motion.img variants={staggerChildren} src="/Checkout/Checkout-Popup-Illustration.png" alt="Order Placed" className="placed-illustration" />

        <div className="order-placed-title">
          <motion.img variants={staggerChildren} src="/Checkout/Checkout-Popup.png" alt="Checkout" />
        </div>
      </div>

      <div className="order-placed-buttons-wrapper">
        <motion.button 
          className="order-placed-button button light"
          variants={staggerChildren}
        >
          track order
        </motion.button>

        <motion.button  
          className="order-placed-button button red"
          variants={staggerChildren}
          onClick={() => navigate("/")}
        >
          exit
        </motion.button>
      </div>
    </motion.div>
  )
}

export default OrderPlaced;