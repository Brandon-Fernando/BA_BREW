

const OrderInfoCard = ({order}) => {
  const orderedAt = order.orderedAt?.toDate();

  return(
    <div className="order-info-card">
      <span className="order-info-card-title">order #{order.orderNumber}</span>

      <div className="track-order-drinks">
        {order.cart.map((drink) => (
          <div className="track-order-drink">
            <div className="track-drink-qty">
              {drink.quantity}
            </div>

            <div className="drink-name-info">
              <span className="drink-main-info">{drink.title}</span>
              
              <p>
                {Object.values(drink.customizations ?? {})
                  .filter((value) => value !== "None")
                  .join(" • ")}
              </p>
            </div>

            {/* <span className="order-info-value">x1</span> */}
          </div>
        ))}
        
      </div>

      <hr className="track-order-break"/>

      <div className="track-customer-info-wrapper">
        <div className="track-customer-info">
          <span>Customer Name</span>

          <span className="order-info-value">{order.customerInfo.firstName} {order.customerInfo.lastName}</span>
        </div>

        <div className="track-customer-info">
          <span>Ordered At</span>

          <span className="order-info-value">
            {orderedAt?.toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>

    </div>
  )
}

export default OrderInfoCard;