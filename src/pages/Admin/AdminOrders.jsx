import { useState } from "react";
import AdminOrderList from "./components/AdminOrderList";
import FilterOrders from "./components/FIlterOrders";


const AdminOrders = () => {
  const [filterOption, setFilterOption] = useState("all");

  return (
    <div className="admin-orders-container">
      <img src="/Admin/Admin.png" alt="admin" />

      {/* FILTER ORDERS  */}
      <FilterOrders filterOption={filterOption} setFilterOption={setFilterOption}/>

      {/* ORDERS  */}
      <AdminOrderList filterOption={filterOption}/>
    </div>
  )
}

export default AdminOrders;