import "./MenuSidebar.css";
import { motion } from "motion/react";
import { sidebarSlide } from "../../animations/motionVariants";
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
      variants={sidebarSlide}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <img src="/Logo/Logo.png" alt="" className="main-logo"/>
      {/* NAV OPTIONS  */}
      <nav className="nav-wrapper">
        {NAV_OPTIONS.map((option) => (
          <button 
            onClick={() => handleNav(option.path)}
            className={`nav-button ${isActive(option.path) ? "active" : ""}`}
          >
            {option.label}
          </button>
        ))}
      </nav>
    </motion.aside>
  )
}

export default MenuSidebar;