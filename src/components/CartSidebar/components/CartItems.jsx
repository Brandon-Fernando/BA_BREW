
const temp = [1];
const subtitle = ["2 Shots", "Oat Milk", "Coldfoam"]


const CartItems = () => {

  return(
    <div className="cart-items-container">
      {temp.map((drink) => (
        <div className="cart-item-wrapper">
          {/* DRINK  */}
          <div className="cart-drink">
            <img src="/Coffee.png" alt="Coffee" />
          </div>

          {/* DRINK INFORMATION / QTY  */}
          <div className="cart-drink-info-wrapper">
            {/* DRINK INFO  */}
            <div className="cart-drink-info">
              <span className="cart-drink-name">Title</span>

              <p className="cart-customization">{subtitle.join(" • ")}</p>
             
            </div>  

            {/* QTY  */}
            <div className="cart-qty">
              <div className="cart-qty-wrapper">
                <div className="plus-minus">
                  <i className="fa-solid fa-minus"/>
                </div>

                <span className="qty">1</span>

                <div className="plus-minus">
                  <i className="fa-solid fa-plus"/>
                </div>
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  )
}

export default CartItems;