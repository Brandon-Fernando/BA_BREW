import { useEffect, useState } from "react";
import { getAllOrders } from "../../Checkout/components/orderService";
import { Link } from "react-router-dom";

const AdminOrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      const allOrders = await getAllOrders();
      setOrders(allOrders);
    }

    loadOrders();
  }, []);
  
  return(
    <div className="admin-order-list-container">
      {orders.map((order) => (
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
      ))}
    </div>
  )
}

export default AdminOrderList;