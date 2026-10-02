import "./Checkout.css";
import OrderSummaryCard from "./components/OrderSummaryCard";

const Checkout = () => {

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
    </div>
  )
}

export default Checkout;