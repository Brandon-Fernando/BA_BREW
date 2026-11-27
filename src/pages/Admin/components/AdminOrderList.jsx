import { useEffect, useState } from "react";
import { getAllOrders, subscribeToOrders } from "../../Checkout/components/orderService";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { staggerContainer, staggerChildren, adminCards } from "../../../animations/motionVariants";
import LoadingAnimation from "../../../components/Loading/LoadingAnimation";

const AdminOrderList = ({
  filteredOrders, 
  loading, 
  activeOrderId, 
  handleSelect
}) => {
 

  // Replace useState(filteredOrders[0]) with this, before the loading return.

  
      
  if (loading) {
    return(
      <div className="admin-loading">
        <LoadingAnimation isLoading={loading}/>
      </div>
    )
  }

   
  return(
    <motion.div className="admin-order-list-container">
      {filteredOrders.map((order) => (
        <motion.div
          key={order.id}
          className="order-card"
          variants={adminCards}
          layout="position"
          transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
          animate={order.id === activeOrderId ? "selected" : "unselected"}
          onClick={() => handleSelect(order.id, order)}
        >
          {/* STATUS / BUTTON  */}
          <div className="admin-order-status">
            <div>
              <span className="order-status-text">{order.status}</span>
            </div>

            <i className="fa-solid fa-ellipsis-vertical"/>
          </div>

          <div className="admin-order-info">
            <span className="admin-order-num">Order #{order.orderNumber} • {order.cart.length} Drink(s)</span>

            <span className="admin-order-flname">{order.customerInfo.firstName} {order.customerInfo.lastName}</span>

            <span className="admin-order-time"> 
              {order.orderedAt?.toDate().toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                // year: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })
            }</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default AdminOrderList;