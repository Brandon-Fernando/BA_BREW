import { motion } from "framer-motion";
import { sidebarSlide } from "../../animations/motionVariants";
import "./CartSidebar.css";
import CursiveTitles from "../CursiveTitles/CursiveTitles";
import CartItems from "./components/CartItems";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CartSidebar = ({onClose}) => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleCheckoutClick = () => {
    onClose();
    navigate("/checkout")
  }

	return(
		<motion.aside
			className="cart-sidebar-container"
			variants={sidebarSlide}
			initial="hidden"
			animate="visible"
			exit="exit"
		>

			{/* TITLE  */}
			<div className="cart-title">
				<span>cart</span>
				
				<div className="cursive-cart">
					<CursiveTitles type="cart"/>
				</div>

        
				
			</div>

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
     

      <div className="cart-button">
        <Button onClick={() => handleCheckoutClick()} size="regular" text="checkout"/>
      </div>

		</motion.aside>	
	)
}

export default CartSidebar;