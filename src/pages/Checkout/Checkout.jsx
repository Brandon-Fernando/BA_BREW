import { useState } from "react";
import "./Checkout.css";
import CustomerInfo from "./components/CustomerInfo";
import OrderSummaryCard from "./components/OrderSummaryCard";

const Checkout = () => {

  const [optIn, setOptIn] = useState(false);

  return(
    <div className="checkout-container">
      <img src="/Logo/SecondaryLogo.png" alt="Logo" className="checkout-logo"/>

      {/* ORDER SUMMARY  */}
      <div className="order-summary-container">
        <span className="checkout-subtitle">order summary</span>
        
        <div className="order-summary-wrapper">
          <OrderSummaryCard />
        </div>
       
      </div>

      <div className="checkout-customer-wrapper">
        <span className="checkout-subtitle">customer info</span>

        <CustomerInfo />
        
        {/* OPT IN  */}
        <div className="opt-msg">
          <div className="opt-btn">
            {optIn && (
              <i className="fa-solid fa-check"/>
            )}
          </div>

          <span>Opt in to receive text message order updates (Optional)</span>
        </div>
      </div>
    </div>
  )
}

export default Checkout;