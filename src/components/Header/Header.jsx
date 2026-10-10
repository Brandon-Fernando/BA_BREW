import "./Header.css";
import { AnimatePresence, motion } from "framer-motion";
import { headerAnimation } from "../../animations/motionVariants";
import { useNavigate } from "react-router-dom";

const Header = ({
  menuSidebarOpen, 
  cartSidebarOpen,
  setMenuSidebarOpen, 
  setCartSidebarOpen
}) => {
  const navigate = useNavigate();

  return(
    <div className="header-container">
      {/* LOGO  */}
      <img 
        src="/Logo/SecondaryLogoLight.png" 
        alt="Logo" 
        className="header-logo-img"
        onClick={() => {
          setMenuSidebarOpen(false)
          setCartSidebarOpen(false)
          navigate("/")}}
      />

      {/* CART MENU  */}
      <AnimatePresence mode="wait">
      {(menuSidebarOpen || cartSidebarOpen) ? (
        <motion.i 
          className="fa-solid fa-x x"
          variants={headerAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => {
            setCartSidebarOpen(false)
            setMenuSidebarOpen(false)
          }}
        />
      ) : (
        <motion.div 
          className="cart-menu"
          variants={headerAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <i onClick={() => setCartSidebarOpen(true)} className="fa-solid fa-cart-shopping"/>

          <div 
            className="header-menu"
            onClick={() => setMenuSidebarOpen(true)}
          >
            <div className="header-line"/>
            <div className="header-line"/>
            <div className="header-line"/>
          </div>
        </motion.div>
      )}

      </AnimatePresence>
      
    </div>
  )
}

export default Header;