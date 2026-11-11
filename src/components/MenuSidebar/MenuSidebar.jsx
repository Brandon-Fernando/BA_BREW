import "./MenuSidebar.css";
import { motion } from "motion/react";
import { menuSidebarSlide, sidebarSlide, staggerContainer, staggerChildren } from "../../animations/motionVariants";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NAV_OPTIONS = [
  {label: "home", path: "/"}, 
  {label: "menu", path: "/menu"}, 
  {label: "cart", path: "/cart"}, 
  {label: "track order", path: "/track"}
]


const MenuSidebar = ({onClose}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentLocation, setCurrentLocation] = useState(location.pathname);

  useEffect(() => {
    setCurrentLocation(location.pathname)
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === "/") {
      return currentLocation === "/";
    }

    return currentLocation.startsWith(path);
  };

  const handleNav = (path) => {
    setCurrentLocation(path);

    setTimeout(() => {
      onClose()
    }, 150);

    setTimeout(() => {
      navigate(path)
    }, 350)

  }

  return(
    <motion.aside 
      className="menu-sidebar-container"
      variants={menuSidebarSlide}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* <div className="close">
        <i className="fa-solid fa-x"/>

      </div> */}
      <span 
        className="close-x"
        onClick={() => onClose()}
      >
        X
      </span>

      <motion.img 
        src="/Menu/Stool.png" 
        alt="" 
        className="main-logo"
        variants={staggerChildren}
      />

      {/* NAV OPTIONS  */}
      <nav className="nav-wrapper">
        {NAV_OPTIONS.map((option) => (
          <motion.button 
            onClick={() => handleNav(option.path)}
            key={option.label}
            className={`nav-button ${isActive(option.path) ? "active" : ""}`}
            variants={staggerChildren}
          >
            {option.label}
          </motion.button>
        ))}
      </nav>

      <motion.div variants={staggerChildren} onClick={() => handleNav("/admin/signin")} className="admin-sign-in">
        <span>admin sign in </span>
      </motion.div>
    </motion.aside>
  )
}

export default MenuSidebar;