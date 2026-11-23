import { motion } from "motion/react";
import OrderCard from "./OrderCard";
import BackButton from "../../../components/Button/BackButton";
import { completeButton } from "../../../animations/motionVariants";


const AdminOrderInfoDesktop = ({
  ORDER_SUB_INFO, 
  order, 
  setItemComplete, 
  updateOrderStatus, 
  allComplete
}) => {

  return(
    <div className="admin-order-info-desktop">
      <div className="admin-order-back">
        <BackButton path={"/admin/orders"}/>
      </div>

      <div className="admin-order-info-left">
        

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
      </div>
      
      
      <div className="order-cart-desktop">
        {order.cart.map((cartItem) => (
          <OrderCard 
            cartItem={cartItem}
            onComplete={setItemComplete}
          />
        ))}
      </div>
      
      {/* {order.status !== "completed" && (
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
      )} */}
    </div>
  )
}

export default AdminOrderInfoDesktop;