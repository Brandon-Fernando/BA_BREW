import { useEffect, useState } from "react";
import { getAllOrders, subscribeToOrders } from "../../Checkout/components/orderService";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { staggerContainer, staggerChildren, adminCards } from "../../../animations/motionVariants";
import LoadingAnimation from "../../../components/Loading/LoadingAnimation";

const AdminOrderList = ({
  filterOption, 
  selectedOrderId, 
  setSelectedOrderId
}) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("");
  
  
  useEffect(() => {
    const unsubscribe = subscribeToOrders(
      (latestOrders) => {
        setOrders(latestOrders);
        setError(null);
        setLoading(false);
      },
      (err) => {
        console.error("Failed to listen for orders:", err);
        setError("Unable to receive live order updates.");
        setLoading(false)
      }
    )

    return () => unsubscribe()
  }, []);
  

  const filteredOrders = 
    filterOption === "all"
    ? orders 
    : orders.filter((order) => order.status === filterOption)
 

  // Replace useState(filteredOrders[0]) with this, before the loading return.

  const activeOrderId =
    filteredOrders.find((order) => order.id === selectedOrderId)?.id ??
    filteredOrders[0]?.id;
      
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
          animate={order.id === activeOrderId ? "selected" : "unselected"}
          onClick={() => setSelectedOrderId(order.id)}
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