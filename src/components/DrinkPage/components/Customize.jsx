import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CUSTOMIZE_OPTIONS } from "../../../constants/constants";
import { expandAnimation, customizeOptions, customizeToggle } from "../../../animations/motionVariants";

const Customize = ({options, selections, onChange}) => {
  const [expandedLabel, setExpandedLabel] = useState(null);


  return(
    <div className="customize-container">
      {options.map((option) => {
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
              {/* <div className="cust-title-select">
                <span className="cust-title">{option.label}</span>

                <span className="cust-select">{selections[option.label]}</span>
              </div> */}
              <span className="cust-title">{option.label}</span>

              <div className="cust-select-btn">
                <AnimatePresence mode="wait">
                  <motion.span 
                    className="cust-select"
                    variants={customizeToggle}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    key={selections[option.label]}
                  >
                    {selections[option.label]}
                  </motion.span>
                </AnimatePresence>

                <motion.div 
                  className="cust-button"
                  initial={false}
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <i className="fa-solid fa-angle-down"/>
                </motion.div>

              </div>
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
                        className="customize-option"
                        onClick={() => onChange(option.label, value)}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>{value}</span>

                        <div className="cust-option-toggle">
                          {selections[option.label] === value && (
                            <div className="cust-option-selected"/>
                          )}
                         
                        </div>
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