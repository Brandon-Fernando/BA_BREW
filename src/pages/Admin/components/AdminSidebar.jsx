import { useState } from "react";

const AdminSidebar = ({selectedOrderId, order}) => {
  const ORDER_SUB_INFO = [
    { label: "Order No.", value: order.orderNumber },
    { label: "Status", value: order.status }, 
    { label: "Phone No.", value: order.customerInfo.phoneNumber}
  ];

  const [completedByItem, setCompletedByItem] = useState({});

  const totalDrinks = order.cart.reduce(
    (total, item) => total + Number(item.quantity),
    0
  );

  const completedDrinks = order.cart.reduce(
    (total, item) =>
      total + Math.min(completedByItem[item.cartItemId] ?? 0, Number(item.quantity)),
    0
  );

  const remainingDrinks = totalDrinks - completedDrinks;

  function markOneComplete(item) {
    const quantity = Number(item.quantity);
    const id = item.cartItemId;

    setCompletedByItem((previous) => ({
      ...previous,
      [id]: (previous[id] ?? 0) >= quantity ? 0 : quantity,
    }));
  }

  // console.log(completedByItem)
  console.log(completedByItem.id)


  return(
    <>
      {/* HEADER  */}
      <span className="sidebar-date">Nov 23, 11:11 AM</span>

      <span className="sidebar-flname">{order.customerInfo.firstName}</span>
      <span className="sidebar-flname">{order.customerInfo.lastName}</span>

      <div className="order-sub-info">
        {ORDER_SUB_INFO.map((info) => (
          <div className="sub-info">
            <span className="info-label">{info.label}</span>
            <span className="info-val">{info.value}</span>
          </div>
        ))}
      </div>

      {/* ORDER ITEMS  */}
      <div className="sidebar-order-items">
        {order.cart.map((item) => {
          const isComplete = (completedByItem[item.cartItemId] ?? 0) > 0;

          return(
            <div 
              className="sidebar-order-card"
              onClick={() => markOneComplete(item)}
            >
              <div className="sidebar-card-header">
                <div className="sidebar-card-qty">
                  {item.quantity}
                </div>

                <span>{item.title}</span>

                <div className="sidebar-card-toggle">
                  {}
                </div>
              </div>

              {/* CUSTOMIZATIONS  */}
              <div className="sidebar-card-cust">
                {Object.entries(item.customizations ?? {}).map(
                  ([name, value]) => (
                    <div key={name} className="customization-card">
                      <span className="cust-name">{name}</span>
                      <span className="cust-val">{value}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          )
        })}
      </div>


      {/* FOOTER  */}
      <div className="admin-sidebar-footer">
        <button className="admin-sidebar-btn button red">
          complete order
        </button>
      </div>
    </>
  )
}

export default AdminSidebar;