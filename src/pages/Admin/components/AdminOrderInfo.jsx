import { useEffect, useState } from "react";
import BackButton from "../../../components/Button/BackButton";
import { useParams } from "react-router-dom";
import { getAllOrders, updateOrderStatus } from "../../Checkout/components/orderService";
import OrderCard from "./OrderCard";
import Loading from "../../../components/Loading/Loading";
import { motion } from "framer-motion";
import { completeButton } from "../../../animations/motionVariants";


const AdminOrderInfo = () => {
  const [order, setOrder] = useState();
  const { orderNum } = useParams();
  const [completeIds, setCompleteIds] = useState(() => new Set());

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

    const setItemComplete = (id, complete) => {
    setCompleteIds((previous) => {
      const next = new Set(previous);

      if(complete) {
        next.add(id);
      } else {
        next.delete(id)
      }

      return next;
    })
  }

  const completedCount = order.cart.filter((item) => 
    completeIds.has(item.cartItemId)
  ).length;

  const allComplete = 
    order.cart.length > 0 && completedCount === order.cart.length;

  const ORDER_SUB_INFO = [
    { label: "Order No.", value: order.orderNumber },
    { label: "Status", value: order.status }, 
    { label: "Phone No.", value: order.customerInfo.phoneNumber}
  ];

  return(
    <div className="admin-order-info">
      <BackButton path={"/admin/orders"}/>

      {/* ORDER NAME  */}
      <div className="info-name">
        <span>{order.customerInfo.firstName}</span>
        <span>{order.customerInfo.lastName}</span>
      </div>

      {/* ORDER SUB INFO  */}
      <div className="order-sub-info">
        {ORDER_SUB_INFO.map((info) => (
          <div className="sub-info">
            <span className="info-label">{info.label}</span>
            <span className="info-val">{info.value}</span>
          </div>
        ))}
      </div>
      
      <div className="order-cart">
        {order.cart.map((cartItem) => (
          <OrderCard 
            cartItem={cartItem}
            onComplete={setItemComplete}
          />
        ))}
      </div>
      
      {order.status !== "completed" && (
        <div className="footer">
          <motion.button 
            className="admin-complete-button button red"
            variants={completeButton}
            initial="inactive"
            animate={allComplete ? "active" : "inactive"}
            disabled={!allComplete}
            onClick={() => updateOrderStatus(order.id, "completed")}
          >
            complete order
          </motion.button>
        </div>
      )}
      

    </div>
  )
}

export default AdminOrderInfo;