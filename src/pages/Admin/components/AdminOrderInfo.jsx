import { useEffect, useState } from "react";
import BackButton from "../../../components/Button/BackButton";
import { useParams } from "react-router-dom";
import { getAllOrders } from "../../Checkout/components/orderService";
import OrderCard from "./OrderCard";



const AdminOrderInfo = () => {
  const [order, setOrder] = useState();
  const { orderNum } = useParams();

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

  console.log(order)

  if (!order) {
    return (
      <div className="admin-order-info">
        <BackButton path="/admin/orders" />
        <p>Loading order or order not found.</p>
      </div>
    );
  }

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
          <OrderCard cartItem={cartItem}/>
        ))}
      </div>

      <div className="footer">
        <button className="admin-complete-button button red">
          complete order
        </button>
      </div>

    </div>
  )
}

export default AdminOrderInfo;