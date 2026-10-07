import "./DrinkPage.css";
import BackButton from "../Button/BackButton";
import { useOutletContext, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { drinkBgSlide, drinkSlide } from "../../animations/motionVariants";
import Customize from "./components/Customize";
import Button from "../Button/Button";
import { SPECIALTY_COFFEES } from "../../constants/constants";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

const MENU_TYPE = {
  "specialty-coffees": SPECIALTY_COFFEES,
}

const DrinkPage = () => {
  const { menuOption, selectedDrink } = useParams();
  const { addToCart } = useCart();

  const { setCartPopupOpen, overlayOpen } = useOutletContext(); 

  const menuType = MENU_TYPE[menuOption];
  const drink = menuType.find((item) => item.id === selectedDrink);

  const [customizations, setCustomizations] = useState(() => 
    Object.fromEntries(
      drink.options.map((group) => [
        group.label, 
        group.options[0]
      ])
    )
  )

  const updateCustomization = (label, value) => {
    setCustomizations((prev) => ({
      ...prev, 
      [label]: value
    }))
  }

  const handleAddToCart = () => {
    addToCart({
      ...drink,
      customizations: { ...customizations },
    });

    setCartPopupOpen(true);
  };


  return(
    <div className="drink-container">
      <BackButton path={`/menu/${menuOption}`}/>

      {/* DRINK IMAGE  */}
      <div className="drink-image-wrapper">
        <motion.div 
          className="drink-bg"
          variants={drinkBgSlide}
          initial="hidden"
          animate="visible"
        />

        <motion.div 
          className="drink-wrapper"
          variants={drinkSlide}
          initial="hidden"
          animate="visible"
        >
          <img src="/Coffee.png" alt="" className="drink-image"/>
        </motion.div>
      </div>

      {/* DRINK TITLE / DESCRIPTION */}
      <div className="drink-title-wrapper">
        <span className="main-drink-title">{drink.title}</span>

        <span className="drink-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
      </div>

      {/* CUSTOMIZE DRINK  */}
      <Customize 
        options={drink.options}
        selections={customizations}
        onChange={updateCustomization}
      />

      {/* FOOTER  */}
      <div
        className="footer"
        style={{ visibility: overlayOpen ? "hidden" : "visible" }}
      >
        <Button
          onClick={() => handleAddToCart()}
          size="regular"
          text="Add to cart"
        />
      </div>
    </div>
  )
}

export default DrinkPage;