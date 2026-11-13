import { useParams } from "react-router-dom";
import BackButton from "../../../components/Button/BackButton";
import MenuList from "./MenuList";
import CursiveTitles from "../../../components/CursiveTitles/CursiveTitles";
import { SPECIALTY_COFFEES } from "../../../constants/constants";
import { motion } from "motion/react";
import { staggerChildren } from "../../../animations/motionVariants";


const MENU_TYPE = {
  "specialty-coffees": SPECIALTY_COFFEES,
}

const MenuOption = () => {
  const { menuOption } = useParams();
  const menuType = MENU_TYPE[menuOption];

  return(
    <div className="menu-option-container">
      <div className="menu-option-header">
        <BackButton path={"/menu"}/>

        <div className="title-wrapper">
          <motion.img variants={staggerChildren} initial="hidden" animate="visible" src="/Menu/Specialty.png" alt="Specialty" className="specialty-menu-title"/>
        </div>
      </div>
      

      {/* SPECIALTY DRINKS  */}
      {/* <div className="specialty-drinks-wrapper"> */}
        {/* <hr className="title-line"/> */}

        {/* <span className="specialty-title">Specialty</span>

        <div className="cursive-subtitle">
          <CursiveTitles type={"drinks"}/>
        </div> */}

        {/* <hr className="title-line"/> */}
        
      {/* </div> */}

      {menuType && (
        <MenuList coffeePath={menuOption} menu={menuType}/>
      )}
     
    </div>
  )
}

export default MenuOption;