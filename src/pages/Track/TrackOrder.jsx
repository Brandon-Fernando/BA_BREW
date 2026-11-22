import BackButton from "../../components/Button/BackButton";
import ProgressBar from "./components/ProgressBar";
import "./Track.css"
import { motion } from "motion/react";
import { staggerChildren, staggerContainer } from "../../animations/motionVariants";


const TrackOrder = () => { 
  return (
    <div className="track-order-container">
      
      {/* HEADER  */}
      <div className="track-order-header">
        <BackButton />

        <div className="track-header-title">
          <span className="track-header-main">Brandon Fernando</span>

          <span className="track-header-sub">Order #671738 • 2 Drinks</span>
        </div>
      </div>

      {/* <ProgressBar /> */}
      <div className="progress-bar-card">
        <ProgressBar />
      </div>

      {/* ILLUSTRATION  */}
      <motion.div 
        className="order-progress-illustration"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.img variants={staggerChildren} src="/Track/Preparing.png" alt="Preparing"/>

        <div className="empty-cart-msg">
          <motion.span variants={staggerChildren} className="msg-title">Preparing Drink</motion.span>
          <motion.span variants={staggerChildren} className="msg-subtitle">Your drinks will show up here once you add to cart.</motion.span>
        </div>
      </motion.div>
    </div>
  )
}

export default TrackOrder;