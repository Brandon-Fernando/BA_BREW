import { useState } from "react";
import AdminOrderList from "./components/AdminOrderList";
import FilterOrders from "./components/FIlterOrders";
import AdminSidebar from "./components/AdminSidebar";


const AdminOrders = () => {
  const [filterOption, setFilterOption] = useState("all");
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  

  return (
    // <div className="admin-orders-container">
    //   <img src="/Admin/Admin.png" alt="admin" />

    //   {/* FILTER ORDERS  */}
    //   <FilterOrders filterOption={filterOption} setFilterOption={setFilterOption}/>

    //   {/* ORDERS  */}
    //   <AdminOrderList filterOption={filterOption}/>
    // </div>
    <div className="admin-orders-container">
      {/* ORDER LIST  */}
      <div className="admin-order-list-wrapper">
        <img src="/Admin/Admin.png" alt="admin" className="admin-title"/>

        <FilterOrders filterOption={filterOption} setFilterOption={setFilterOption}/>

        <AdminOrderList 
          filterOption={filterOption}
          selectedOrderId={selectedOrderId}
          setSelectedOrderId={setSelectedOrderId}
        />
      </div>

      {/* SIDEBAR  */}
      <AdminSidebar />
    </div>
  )
}

export default AdminOrders;