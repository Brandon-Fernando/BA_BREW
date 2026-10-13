import AdminOrderList from "./components/AdminOrderList";
import FilterOrders from "./components/FIlterOrders";


const AdminOrders = () => {

  return (
    <div className="admin-orders-container">
      <img src="/Admin/Admin.png" alt="admin" />

      {/* FILTER ORDERS  */}
      <FilterOrders />

      {/* ORDERS  */}
      <AdminOrderList />
    </div>
  )
}

export default AdminOrders;