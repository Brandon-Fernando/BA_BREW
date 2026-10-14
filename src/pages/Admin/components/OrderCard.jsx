import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const OrderCard = ({ cartItem }) => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="order-card-container">
      <motion.div
        initial={false}
        animate={{ height: isComplete ? "7rem" : "auto" }}
        transition={{
          height: {
            type: "spring",
            stiffness: 120,
            damping: 24,
            mass: 1,
          },
        }}
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {!isComplete ? (
            <motion.div
              key="order-content"
              className="order-content incomplete"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <div className="order-card-img">
                <img
                  src="/Coffee.png"
                  alt="Drink"
                  className="order-drink"
                />
              </div>

              <span className="cart-item-title">
                {cartItem.title}
              </span>

              <div className="order-customization">
                {Object.entries(cartItem.customizations ?? {}).map(
                  ([name, value]) => (
                    <div key={name} className="customization-card">
                      <span className="cust-name">{name}</span>
                      <span className="cust-val">{value}</span>
                    </div>
                  )
                )}
              </div>

              <button
                className="button red order-card-button"
                onClick={() => setIsComplete(true)}
              >
                Complete
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="order-complete"
              className="order-content complete"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              style={{
                height: "7rem",
                boxSizing: "border-box",
              }}
            >
              <div className="order-complete-img">
                <div className="order-card-img">
                  <img
                    src="/Coffee.png"
                    alt="Drink"
                    className="order-drink"
                  />
                </div>

                <div className="complete-msg">
                  <span>Complete</span>

                  <div className="complete-img">
                    <i className="fa-solid fa-check" />
                  </div>
                </div>
              </div>

              <div
                onClick={() => setIsComplete(false)}
                className="details-button"
              >
                <span>details</span>
                <i className="fa-solid fa-angle-down" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default OrderCard;