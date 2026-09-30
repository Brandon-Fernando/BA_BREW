import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { motion } from "framer-motion";
import { staggerContainer, wrapperSlide, slideInFromRight, slideInFromLeft } from "../../../animations/motionVariants";

const temp = [1, 2, 3, 4]

const MenuList = ({coffeePath}) => {

  return (
    <motion.div 
      className="menu-list-container"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {temp.map((drink, index) => (
        <Link className="drink-link" to={`/menu/${coffeePath}/iced-latte`}>
          <motion.div 
            className={`drink-card-wrapper ${index % 2 === 1 ? "reverse" : ""}`}
            variants={wrapperSlide}
          >
            <motion.img 
              variants={index % 2 === 1 ? slideInFromRight : slideInFromLeft} 
              src="/Coffee.png" 
              alt="coffee" 
              className="coffee-img"
            />

            <motion.div
             className="drink-title-button"
             variants={index % 2 === 1 ? slideInFromLeft: slideInFromRight}
            >
              <span className="drink-title">Title</span>

              <Button size={"S"} text="View"/>
            </motion.div>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  )
}

export default MenuList;