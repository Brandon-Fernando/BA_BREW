const subtitle = ["2 Shots", "Oat Milk", "Coldfoam"]

const OrderSummaryCard = () => {

  return(
    <div className="order-summary-card">
      {/* DRINK  */}
      <div className="sum-drink">
        <img src="/Coffee.png" alt="COffee" />
      </div>

      <div className="sum-info">
        <span className="sum-info-title">Title</span>

         <p className="sum-customization">{subtitle.join(" • ")}</p>
      </div>
    </div>
  )
}

export default OrderSummaryCard;