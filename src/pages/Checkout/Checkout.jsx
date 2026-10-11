import { useState } from "react";
import "./Checkout.css";
import CustomerInfo from "./components/CustomerInfo";
import OrderSummaryCard from "./components/OrderSummaryCard";
import Button from "../../components/Button/Button";
import { useCart } from "../../context/CartContext";
import BackButton from "../../components/Button/BackButton";
import LoadingAnimation from "../../components/Loading/LoadingAnimation";
import { AnimatePresence, motion } from "framer-motion";
import { staggerContainer, staggerChildren } from "../../animations/motionVariants";
import Loading from "../../components/Loading/Loading";
import OrderPlaced from "./components/OrderPlaced";
import { createOrder } from "./components/orderService";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Checkout = () => {
  const { cart } = useCart();
  const [optIn, setOptIn] = useState(false);
  const [values, setValues] = useState({
    firstName: "", 
    lastName: "", 
    phoneNumber: ""
  })
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // VALIDATE FIELD 
  const validateField = (field, value) => {
    if(!value.trim()) {
      return { 
        firstName: "error", 
        lastName: "error", 
        phoneNumber: "error"
      }[field];
    }

    if (field === "phoneNumber") {
      const digits = value.replace(/\D/g, "");

      if (!/^(?:1)?\d{10}$/.test(digits)) {
        return "Enter a valid phone number.";
      }
    }

    return "";
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => {
      if (!previous[name]) return previous;

      return {
        ...previous,
        [name]: validateField(name, value),
      };
    });
  };

  const handlePlaceOrder = async () => {
    const nextErrors = Object.fromEntries(
      Object.entries(values).map(([field, value]) => [
        field,
        validateField(field, value),
      ])
    );

    setErrors(nextErrors);

    const firstInvalidField = Object.keys(nextErrors).find(
      (field) => nextErrors[field]
    );

    if (firstInvalidField) {
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    // Place the order here.
    try{
      setIsLoading(true);

      await createOrder({
        checkoutData: values,
        cart: cart.map((item) => ({
          id: item.id,
          cartItemId: item.cartItemId,
          title: item.title,
          quantity: item.quantity,
          customizations: item.customizations
        })),
      })

      await delay(2909);
      
      setOrderPlaced(true)
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false)
    }

  };

  const handleOptIn = () => {
    setOptIn(!optIn)
  }
  
  console.log(cart)



  return (
  <AnimatePresence mode="wait">
    {isLoading ? (
      <Loading 
        key="loading"
        isLoading={isLoading}
        text="placing order"
      />
    ) : orderPlaced ? (
      <OrderPlaced />
    ) : (
      <div key="checkout" className="checkout-container">
        {/* EXIT BUTTON  */}
      <BackButton path={-1}/>
      
     
      <div className="checkout-logo-wrapper">
         <img src="/Home/Main_Logo.png" alt="Logo" className="checkout-logo"/>
      </div>
     

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

        <CustomerInfo 
          handleChange={handleChange}
          values={values}
          errors={errors}
        />
        
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
      <div
        className="footer"
        // style={{ visibility: overlayOpen ? "hidden" : "visible" }}
      >
        <button 
          className="checkout-button button red"
          onClick={() => handlePlaceOrder()}
        >
          place order
        </button>
      </div>
      </div>
    )}
  </AnimatePresence>
);
}

export default Checkout;