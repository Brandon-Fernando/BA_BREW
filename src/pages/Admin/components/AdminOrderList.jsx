import { useEffect, useState } from "react";
import { getAllOrders, subscribeToOrders } from "../../Checkout/components/orderService";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { staggerContainer, staggerChildren } from "../../../animations/motionVariants";
import LoadingAnimation from "../../../components/Loading/LoadingAnimation";

const AdminOrderList = ({filterOption}) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  
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

  
  if (loading) {
    return(
      <div className="admin-loading">
        <LoadingAnimation isLoading={loading}/>
      </div>
    )
  }
   
  return(
    <motion.div 
      className="admin-order-list-container"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      key={filterOption}
    >
      {filteredOrders.map((order) => (
        <motion.div variants={staggerChildren} >
          <Link to={`/admin/orders/${order.orderNumber}`} className="order-card">
            {/* NAME STATUS  */}
            <div className="order-name-status">
              <span className="order-name">{order.customerInfo.firstName} {order.customerInfo.lastName}</span>

              <div className="admin-order-status">
                <span>{order.status}</span>
              </div>
            </div>

            {/* ORDER NUMBER QTY  */}
            <div className="order-number-qty">
              <span>Order #{order.orderNumber} • {order.cart.length} Drinks</span>
            </div>

            {/* TIME BUTTON  */}
            <div className="order-time-button">
              <div className="order-time">
                <i className="fa-solid fa-clock"/>

                <span> {order.orderedAt?.toDate().toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  // year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}</span>
              </div>

              {/* <button className="order-view button red">
                view
              </button> */}
              <i className="fa-solid fa-angle-right ang"/>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default AdminOrderList;