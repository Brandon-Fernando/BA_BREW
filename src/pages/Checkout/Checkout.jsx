import { useState } from "react";
import "./Checkout.css";
import CustomerInfo from "./components/CustomerInfo";
import OrderSummaryCard from "./components/OrderSummaryCard";
import Button from "../../components/Button/Button";
import { useCart } from "../../context/CartContext";

const Checkout = () => {
  const { cart } = useCart();
  const [optIn, setOptIn] = useState(false);

  const handleOptIn = () => {
    setOptIn(!optIn)
  }

  return(
    <div className="checkout-container">
      <img src="/Home/Main_Logo.png" alt="Logo" className="checkout-logo"/>

      {/* ORDER SUMMARY  */}
      <div className="order-summary-container">
        <span className="checkout-subtitle">order summary</span>
        
        <div className="order-summary-wrapper">
          {/* <OrderSummaryCard /> */}
          {cart.map((cartItem) => (
            <OrderSummaryCard item={cartItem}/>
          ))}
        </div>
       
      </div>

      <div className="checkout-customer-wrapper">
        <span className="checkout-subtitle">customer info</span>

        <CustomerInfo />
        
        {/* OPT IN  */}
        <div className="opt-msg">
          <div 
            onClick={() => handleOptIn()}
            className={`opt-btn ${optIn ? "confirmed" : ""}`}
          >
            {optIn && (
              <i className="fa-solid fa-check"/>
            )}
          </div>

          <span>Opt in to receive text message order updates (Optional)</span>
        </div>
      </div>

      {/* ORDER BUTTON  */}
      <div className="place-order-button">
        <Button size="regular" text="place order"/>
      </div>
    </div>
  )
}

export default Checkout;