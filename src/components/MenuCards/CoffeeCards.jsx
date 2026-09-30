import "./CoffeeCards.css";
import { motion } from "framer-motion";
import { staggerContainer, staggerChildren } from "../../animations/motionVariants";
import { Link } from "react-router-dom";

const COFFEE_OPTIONS = [
  {
    label: "Specialty Coffees", 
    src: "/Coffee.png", 
    parentClass: "card-top", 
    childClass: "card-content-top", 
    path: "specialty-coffees"
  }, 
  {
    label: "Classic Coffees", 
    src: "/Coffee.png", 
    parentClass: "card-middle", 
    childClass: "card-content-middle", 
    path: "classic-coffees"
  }, 
  {
    label: "Other Drinks", 
    src: "/Coffee.png", 
    parentClass: "card-bottom", 
    childClass: "card-content-bottom", 
    path: "other-drinks"
  }
]

export default function CoffeeCards() {
  return (
    <motion.div
      className="cards"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {COFFEE_OPTIONS.map((option) => (
        <motion.article
          className={`card ${option.parentClass}`}
          variants={staggerChildren}
        >
          <Link 
            className={`menu-link ${option.childClass}`}
            to={`/menu/${option.path}`}
          >
            <span>{option.label}</span>

            <img src={option.src} alt="Coffee" />
          </Link>
        </motion.article>
      ))}
    </motion.div>
  );
}