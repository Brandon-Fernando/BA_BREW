import { AnimatePresence, motion, stagger } from "framer-motion";
import { useState } from "react";
import { incompleteAnimation, completeAnimation, slideDown, staggerChildrenDown, slideInFromLeft, slideInFromRightAdmin } from "../../../animations/motionVariants";

const OrderCard = ({ cartItem, onComplete }) => {
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
              variants={incompleteAnimation}
              className="order-content incomplete"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div variants={staggerChildrenDown} className="order-card-img">
                <img
                  src="/Coffee.png"
                  alt="Drink"
                  className="order-drink"
                />
              </motion.div>

              <motion.span variants={staggerChildrenDown} className="cart-item-title">
                {cartItem.title}
              </motion.span>

              <div className="order-customization">
                {Object.entries(cartItem.customizations ?? {}).map(
                  ([name, value]) => (
                    <motion.div variants={staggerChildrenDown} key={name} className="customization-card">
                      <span className="cust-name">{name}</span>
                      <span className="cust-val">{value}</span>
                    </motion.div>
                  )
                )}
              </div>

              <motion.button
                className="button red order-card-button"
                onClick={() => {
                  setIsComplete(true);
                  onComplete(cartItem.cartItemId, true)
                }}
                variants={staggerChildrenDown}
              >
                Complete
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="order-complete"
              className="order-content complete"
              variants={completeAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                height: "7rem",
                boxSizing: "border-box",
              }}
            >
              <div className="order-complete-img">
                <motion.div variants={slideInFromRightAdmin} className="order-card-img">
                  <img
                    src="/Coffee.png"
                    alt="Drink"
                    className="order-drink"
                  />
                </motion.div>

                <motion.div variants={slideInFromLeft} className="complete-msg">
                  <span>Complete</span>

                  <div className="complete-img">
                    <i className="fa-solid fa-check" />
                  </div>
                </motion.div>
              </div>

              <motion.div
                onClick={() => {
                  setIsComplete(false);
                  onComplete(cartItem.cartItemId, false)
                }}
                className="details-button"
                variants={slideDown}
              >
                <span>details</span>
                <i className="fa-solid fa-angle-down" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default OrderCard;