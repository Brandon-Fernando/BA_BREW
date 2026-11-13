// import "./Header.css";
// import { AnimatePresence, motion } from "framer-motion";
// import { headerAnimation } from "../../animations/motionVariants";
// import { useNavigate } from "react-router-dom";

// const Header = ({
//   menuSidebarOpen, 
//   cartSidebarOpen,
//   setMenuSidebarOpen, 
//   setCartSidebarOpen
// }) => {
//   const navigate = useNavigate();

//   return(
//     <div className="header-container">
//       {/* LOGO  */}
//       <img 
//         src="/Logo/SecondaryLogoLight.png" 
//         alt="Logo" 
//         className="header-logo-img"
//         onClick={() => {
//           setMenuSidebarOpen(false)
//           setCartSidebarOpen(false)
//           navigate("/")}}
//       />

//       {/* CART MENU  */}
//       <AnimatePresence mode="wait">
//       {(menuSidebarOpen || cartSidebarOpen) ? (
//         <motion.i 
//           className="fa-solid fa-x x"
//           variants={headerAnimation}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           onClick={() => {
//             setCartSidebarOpen(false)
//             setMenuSidebarOpen(false)
//           }}
//         />
//       ) : (
//         <motion.div 
//           className="cart-menu"
//           variants={headerAnimation}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//         >
//           <i onClick={() => setCartSidebarOpen(true)} className="fa-solid fa-cart-shopping"/>

//           <div 
//             className="header-menu"
//             onClick={() => setMenuSidebarOpen(true)}
//           >
//             <div className="header-line"/>
//             <div className="header-line"/>
//             <div className="header-line"/>
//           </div>
//         </motion.div>
//       )}

//       </AnimatePresence>
      
//     </div>
//   )
// }

// export default Header;
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { motion } from "motion/react";
import { popupScale } from "../../animations/motionVariants";

const Header = ({
  setMenuSidebarOpen
}) => {
  const navigate = useNavigate();
  const { cart } = useCart();

  
  return(
    <div className="header-container">
      {/* MENU */}
      <div 
        className="header-menu"
        onClick={() => setMenuSidebarOpen(true)}
      >
        <div className="header-line"/>
        <div className="header-line"/>
        <div className="header-line"/>
      </div>

      <div className="cart-header-container">
        <i 
          className="fa-solid fa-cart-shopping cart-icon"
          onClick={() => navigate("/cart")}
        />

        {cart.length > 0 && (
          <motion.div 
            className="cart-num"
            variants={popupScale}
            initial="hidden"
            animate="visible"
          >
            <span>{cart.length}</span>
          </motion.div>
        )}
       
      </div>
      
    </div>
  )
 
}

export default Header;