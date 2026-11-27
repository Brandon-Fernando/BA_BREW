import { useState, useEffect } from "react";
import AdminOrderList from "./components/AdminOrderList";
import FilterOrders from "./components/FIlterOrders";
import AdminSidebar from "./components/AdminSidebar";
import { subscribeToOrders } from "../Checkout/components/orderService";
import { AnimatePresence, motion } from "motion/react";
import { adminSidebar } from "../../animations/motionVariants";


const AdminOrders = () => {
  const [filterOption, setFilterOption] = useState("all");
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("");
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState();

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
 
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const activeOrderId =
    filteredOrders.find((order) => order.id === selectedOrderId)?.id 

  const handleSelect = (id, order) => {
    if(selectedOrderId === id){
      setSelectedOrderId(null)
      setOrder(null)
      return
    }
    setSelectedOrderId(id)
    setOrder(order)
  }



  return (
    <div className="admin-orders-container">
      {/* ORDER LIST  */}
      <div className="admin-order-list-wrapper">
        <img src="/Admin/Admin.png" alt="admin" className="admin-title"/>

        <FilterOrders filterOption={filterOption} setFilterOption={setFilterOption}/>

        <AdminOrderList 
          activeOrderId={activeOrderId}
          loading={loading}
          filteredOrders={filteredOrders}
          handleSelect={handleSelect}
          setOrder={setOrder}
        />
      </div>

      {/* SIDEBAR  */}
      {selectedOrderId && (
        <AnimatePresence mode="wait">
          <motion.div 
            className="admin-sidebar"
            variants={adminSidebar}
            initial="inactive"
            animate="active"
            key={selectedOrderId}
          >
            <AdminSidebar 
              selectedOrderId={selectedOrderId}
              order={order}
            />
          </motion.div>
          
        </AnimatePresence>
      )}
      
    </div>
  )
}

export default AdminOrders;