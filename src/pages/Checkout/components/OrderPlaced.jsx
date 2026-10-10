

const OrderPlaced = () => {

  return(
    <div className="order-placed-container">
      <div className="order-placed-title">
        <span>Order</span>
        <span>Placed</span>
      </div>

      <img src="/Logo/OrderPlaced.png" alt="order placed" />

      <div className="order-placed-buttons-wrapper">
        <button 
          className="order-placed-button button light"
        >
          track order
        </button>

        <button  
          className="order-placed-button button red"
        >
          exit
        </button>
      </div>
    </div>
  )
}

export default OrderPlaced;