

const SearchResult = ({order}) => {

  return (
    <div className="search-result-card">
      {/* NAME / STATUS  */}
      <div className="search-name-status">
        <span>{order.customerInfo.firstName} {order.customerInfo.lastName}</span>

        <div className="search-status">
          <span>{order.status}</span>
        </div>
      </div>

      {/* ORDER NUMBER / NUM DRINKS  */}
      <div className="search-order-info">
        <span>Order #671738 • 2 Drinks</span>
      </div>

      {/* TRACK BUTTON  */}
      <div className="search-track-btn">
        <div className="track-date">
          <i className="fa-solid fa-clock"/>

          <span>Today, 11:23 AM</span>
        </div>

        <div className="track-btn-wrapper">
          <button className="track-btn button red">
            track
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchResult;