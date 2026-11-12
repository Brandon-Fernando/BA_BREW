import "./Cart.css"
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";
import { slideUpCart, staggerChildren } from "../../animations/motionVariants";
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
        <div>
        </div>
      )}

      <div className="cart-button-wrapper">
        <motion.button 
          className="cart-btn button red"
          onClick={() => navigate("/checkout")}
          variants={slideUpCart}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          checkout
        </motion.button>
      </div>
    </div>
  )
}

export default Cart;