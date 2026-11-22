import { motion } from "motion/react";

const STEPS = [
  {
    label: "Order",
    status: "pending",
    icon: "fa-solid fa-receipt",
  },
  {
    label: "Preparing",
    status: "preparing",
    icon: "fa-solid fa-mug-hot",
  },
  {
    label: "Complete",
    status: "complete",
    icon: "fa-solid fa-check",
  },
];

const LINE_DURATION = 0.6;
const CIRCLE_DURATION = 0.25;

const ProgressBar = () => {
  const order = ["preparing"]

  const currentStep = STEPS.findIndex(
    (step) => step.status === order[0]
  );

  return (
    <div className="order-progress">
      {STEPS.map((step, index) => {
        // Pending is reached initially. Other circles are reached only
        // after the order progresses beyond them.
        const isReached =
          index === 0 || index < currentStep+1;
        
        // console.log(index)
        console.log(currentStep - 1)

        const lineProgress =
          index < currentStep 
            ? 1
            : 0

        const circleDelay =
          index === 0 ? 0 : index * LINE_DURATION;

        return (
          <div className="progress-item" key={step.status}>
            <div className="progress-visual">
              <motion.div
                className="progress-circle"
                initial={{
                  backgroundColor: "#D6968B",
                  borderColor: "#D6968B",
                  color: "#EADDCA",
                }}
                animate={{
                  backgroundColor: isReached ? "#CA5050" : "#D6968B",
                  borderColor: isReached ? "#CA5050" : "#D6968B",
                  color: isReached ? "#ffffff" : "#EADDCA",
                  scale: isReached ? [1, 1.12, 1] : 1,
                }}
                transition={{
                  duration: CIRCLE_DURATION,
                  delay: 1 + circleDelay,
                }}
              >
                <i className={step.icon} />
              </motion.div>
              {index < STEPS.length - 1 && (
                <div className="progress-line">
                  <motion.div
                    className={`progress-line-fill ${index === currentStep ? "end" : ""}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: lineProgress }}
                    transition={{
                      duration: LINE_DURATION,
                      delay: 1 + index * LINE_DURATION,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProgressBar;

