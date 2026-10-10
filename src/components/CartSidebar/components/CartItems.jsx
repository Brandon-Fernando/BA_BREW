import { motion } from "motion/react";
import { buttonScale, staggerContainer, staggerChildren } from "../../../animations/motionVariants";

const CartItems = ({cart, updateQuantity, removeFromCart}) => {

  return(
    <motion.div 
      className="cart-items-container"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {cart.map((drink) => (
        <motion.div variants={staggerChildren} className="cart-item-wrapper">
          {/* DRINK  */}
          <div className="cart-drink">
            <img src="/Coffee.png" alt="Coffee" />
          </div>

          {/* DRINK INFORMATION / QTY  */}
          <div className="cart-drink-info-wrapper">
            {/* DRINK INFO  */}
            <div className="cart-drink-info">
              <span className="cart-drink-name">{drink.title}</span>

              <p className="cart-customization">
                {Object.values(drink.customizations ?? {})
                  .filter((value) => value !== "None")
                  .join(" • ")}
              </p>
             
            </div>  

            {/* QTY  */}
            <div className="cart-qty">
              <div className="cart-qty-wrapper">
                {/* MINUS  */}
                <motion.div
                  className="plus-minus"
                  onClick={() => drink.quantity === 1 ? 
                    removeFromCart(drink.cartItemId) : 
                    updateQuantity(drink.drinkItemId, Number(drink.quantity) - 1)
                  }
                  variants={buttonScale}
                  initial="inactive"
                  whileTap={"active"}
                >
                  {drink.quantity === 1 ? (
                    <i className="fa-solid fa-trash"/>
                  ) : (
                    <i className="fa-solid fa-minus"/>
                  )}
                 
                </motion.div>

                <span className="qty">{drink.quantity}</span>

                <motion.div 
                  className="plus-minus"
                  onClick={() => updateQuantity(drink.drinkItemId, Number(drink.quantity) + 1)}
                  variants={buttonScale}
                  initial="inactive"
                  whileTap={"active"}
                >
                  <i className="fa-solid fa-plus"/>
                </motion.div>
              </div>
            </div>

          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default CartItems;