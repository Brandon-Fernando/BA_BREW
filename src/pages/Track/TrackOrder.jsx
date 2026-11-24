import BackButton from "../../components/Button/BackButton";
import ProgressBar from "./components/ProgressBar";
import "./Track.css"
import { motion } from "motion/react";
import { staggerChildren, staggerContainer } from "../../animations/motionVariants";
import OrderInfoCard from "./components/OrderInfoCard";
import { useEffect, useState } from "react";
import { getAllOrders } from "../Checkout/components/orderService";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const TrackOrder = () => {
  const [order, setOrder] = useState();
  const { orderNum } = useParams()

  

  useEffect(() => {
    const loadOrder = async () => {
      try{
        const allOrders = await getAllOrders();
        const matchingOrder = allOrders.find(
          (orders) => String(orders.orderNumber) === orderNum
        )

        setOrder(matchingOrder)
      } catch (error) {
        console.error(error)
      }
    }

    loadOrder();
  }, [orderNum])

  if (!order) {
    return (
      <div className="admin-order-load">
        <BackButton path="/admin/orders" />
        <div className="load-admin">
          <Loading isLoading={true} text={"loading order"}/>
        </div>
       
      </div>
    );
  }


  return (
    <motion.div 
      className="track-order-container"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >

      {/* HEADER  */}
      {/* <div className="track-order-header">
                  <BackButton />
          
                  <div className="track-header-title">
                    <span className="track-header-main">Brandon Fernando</span>
          
                    <span className="track-header-sub">Order #671738 • 2 Drinks</span>
                  </div>
                </div> */}
      <BackButton path={-1}/>


      {/* ILLUSTRATION  */}
      <motion.div
        className="order-progress-illustration"
      >
        <div className="empty-cart-msg">
          <motion.span variants={staggerChildren} className="msg-title">
            {order.status === "preparing" ? (
              <span>Preparing Drink</span>
            ) : (
              <span>Order Complete</span>
            )}
          </motion.span>
          <motion.span variants={staggerChildren} className="msg-subtitle">Your drinks will show up here once you add to cart.</motion.span>
        </div>

        <motion.img
          variants={staggerChildren}
          src={
            order.status === "preparing"
              ? "/Track/Preparing.png"
              : "/Track/Completed.png"
          }
          alt={order.status === "preparing" ? "Preparing your order" : "Order completed"}
          className={`track-img ${order.status}`}
        />
      </motion.div>

      {/* <ProgressBar /> */}
      <motion.div variants={staggerChildren} className="progress-bar-card">
        <ProgressBar order={order}/>
      </motion.div>

      {/* ORDER INFO CARD */}
      <motion.div variants={staggerChildren}>
        <OrderInfoCard order={order}/>
      </motion.div>
    </motion.div>
  );
}

export default TrackOrder;