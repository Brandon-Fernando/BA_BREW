import { useState } from "react";
import "./Checkout.css";
import CustomerInfo from "./components/CustomerInfo";
import OrderSummaryCard from "./components/OrderSummaryCard";
import Button from "../../components/Button/Button";
import { useCart } from "../../context/CartContext";
import BackButton from "../../components/Button/BackButton";

const Checkout = () => {
  const { cart } = useCart();
  const [optIn, setOptIn] = useState(false);
  const [values, setValues] = useState({
    firstName: "", 
    lastName: "", 
    phoneNumber: ""
  })

  const [errors, setErrors] = useState({});

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

  const handlePlaceOrder = () => {
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
  };

  const handleOptIn = () => {
    setOptIn(!optIn)
  }

  return(
    <div className="checkout-container">
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
        <Button
          onClick={() => handlePlaceOrder()}
          size="regular"
          text="Add to cart"
        />
      </div>
    </div>
  )
}

export default Checkout;