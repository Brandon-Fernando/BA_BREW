

const OrderInfoCard = ({order}) => {

  return(
    <div className="order-info-card">
      <span className="order-info-card-title">order #{order.orderNumber}</span>

      <div className="track-order-drinks">
        {order.cart.map((drink) => (
          <div className="track-order-drink">
            <div className="drink-name-info">
              <span className="drink-main-info">{drink.title}</span>
              
              <p>
                {Object.values(drink.customizations ?? {})
                  .filter((value) => value !== "None")
                  .join(" • ")}
              </p>
            </div>

            <span className="order-info-value">x1</span>
          </div>
        ))}
        
      </div>

      <hr className="track-order-break"/>

      <div className="track-customer-info-wrapper">
        <div className="track-customer-info">
          <span>Customer Name</span>

          <span className="order-info-value">Brandon Fernando</span>
        </div>
      </div>

    </div>
  )
}

export default OrderInfoCard;