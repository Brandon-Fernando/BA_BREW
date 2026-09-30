import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CUSTOMIZE_OPTIONS } from "../../../constants/constants";
import { expandAnimation, customizeOptions } from "../../../animations/motionVariants";

const Customize = () => {
  const [expandedLabel, setExpandedLabel] = useState(null);

  return(
    <div className="customize-container">
      {CUSTOMIZE_OPTIONS.map((option) => {
        const isExpanded = option.label === expandedLabel;

        return(        
          <div
            className="customize-card"
          >
            {/* CUSTOMIZE TITLE / SELECTED  */}
            <div 
              className="cust-closed"
              onClick={() => option.label === expandedLabel ?
                setExpandedLabel(null) : 
                setExpandedLabel(option.label)
              }
            >
              <div className="cust-title-select">
                <span className="cust-title">{option.label}</span>

                <span className="cust-select">{option.options[0]}</span>
              </div>
              

              <motion.div 
                className="cust-button"
                initial={false}
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <i className="fa-solid fa-angle-down"/>
              </motion.div>
            </div>

            {/* CUSTOMIZED CARD OPENED  */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  key="options"
                  variants={expandAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{ overflow: "hidden" }}
                >
                  <div className="customize-options">
                    {option.options.map((value) => (
                      <motion.div 
                        key={value}
                        className="customize-option"
                        variants={customizeOptions}
                        animate={option.options[0] === value ? "active" : "inactive"}
                      >
                        {value}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export default Customize;