import "./Cart.css"
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";
import { slideUpCart, staggerChildren, staggerContainer } from "../../animations/motionVariants";
import CartItems from "../../components/CartSidebar/components/CartItems";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart } = useCart();

  return(
    <div className="cart-page-container">
      <button
       className="exit"
       onClick={() => navigate(-1)}
      >
        <i className="fa-solid fa-x"/>
      </button>

      <motion.img variants={staggerChildren} initial="hidden" animate="visible" src="/Cart/Cart.png" alt="Cart" className="cart-page-title"/>

      {cart.length > 0 ? (
        <CartItems 
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      ) : (
        <motion.div
          className="empty-cart-wrapper"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.img variants={staggerChildren} src="/States/Empty-State.png" alt="Empty" className="empty-cart"/>

          <div className="empty-cart-msg">
            <motion.span variants={staggerChildren} className="msg-title">empty cart</motion.span>
            <motion.span variants={staggerChildren} className="msg-subtitle">Your drinks will show up here once you add to cart.</motion.span>
          </div>
        </motion.div>
      )}

      <div className="cart-button-wrapper">
        <motion.button 
          className="cart-btn button red"
          onClick={() => cart.length > 0
            ? navigate("/checkout")
            : navigate("/menu")
          }
          variants={slideUpCart}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={cart.length < 1}
        >
          {cart.length > 0 ? (
            <span>Checkout</span>
          ) : (
            <span>Add to cart</span>
          )}
        </motion.button>
      </div>
    </div>
  )
}

export default Cart;