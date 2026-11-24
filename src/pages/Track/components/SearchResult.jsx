import { Link } from "react-router-dom";


const SearchResult = ({order}) => {
  console.log(order)
  const orderedAt = order.orderedAt?.toDate();

  return (
    <Link to={`/track/${order.orderNumber}`} className="search-result-card">
      {/* NAME / STATUS  */}
      <div className="search-name-status">
        <span>{order.customerInfo.firstName} {order.customerInfo.lastName}</span>

        <div className="search-status">
          <span>{order.status}</span>
        </div>
      </div>

      {/* ORDER NUMBER / NUM DRINKS  */}
      <div className="search-order-info">
        <span>Order #{order.orderNumber} • {order.cart.length} Drink(s)</span>
      </div>

      {/* TRACK BUTTON  */}
      <div className="search-track-btn">
        <div className="track-date">
          <i className="fa-solid fa-clock"/>

          <span>
            {orderedAt?.toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
            })}
          </span>
        </div>

        <div className="track-btn-wrapper">
          <button className="track-btn button red">
            track
          </button>
        </div>
      </div>
    </Link>
  )
}

export default SearchResult;