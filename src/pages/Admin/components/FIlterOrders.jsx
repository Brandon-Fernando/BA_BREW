import { useState } from "react";
import { motion } from "motion/react";
import { filterAnimation } from "../../../animations/motionVariants";

const FILTER_OPTIONS = ["all", "preparing", "completed"];

const FilterOrders = () => {
  const [filterOption, setFilterOption] = useState("all");

  return(
    <div className="filter-orders-container">
      <div className="filter-title">
        <i className="fa-solid fa-filter"/>

        <span>filter orders</span>
      </div>

      <div className="filter-options">
        {FILTER_OPTIONS.map((filter) => (
          <motion.div 
            className="filter"
            variants={filterAnimation}
            animate={filter === filterOption ? "active" : "inactive"}
            onClick={() => setFilterOption(filter)}
          >
            <span>{filter}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FilterOrders;