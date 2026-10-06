const subtitle = ["2 Shots", "Oat Milk", "Coldfoam"]

const OrderSummaryCard = ({item}) => {

  return(
    <div className="order-summary-card">
      {/* DRINK  */}
      <div className="sum-drink">
        <img src="/Coffee.png" alt="COffee" />
      </div>

      <div className="sum-info">
        <span className="sum-info-title">{item.title}</span>

         {/* <p className="sum-customization">{subtitle.join(" • ")}</p> */}
         <p className="sum-customization">
          {Object.values(item.customizations ?? {})
          .filter((value) => value !== "None")
          .join(" • ")}
         </p>
      </div>
    </div>
  )
}

export default OrderSummaryCard;