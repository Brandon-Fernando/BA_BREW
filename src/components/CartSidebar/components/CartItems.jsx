

const CartItems = ({cart, updateQuantity, removeFromCart}) => {

  return(
    <div className="cart-items-container">
      {cart.map((drink) => (
        <div className="cart-item-wrapper">
          {/* DRINK  */}
          <div className="cart-drink">
            <img src="/Coffee.png" alt="Coffee" />
          </div>

          {/* DRINK INFORMATION / QTY  */}
          <div className="cart-drink-info-wrapper">
            {/* DRINK INFO  */}
            <div className="cart-drink-info">
              <span className="cart-drink-name">{drink.title}</span>

              <p className="cart-customization">
                {Object.values(drink.customizations ?? {})
                  .filter((value) => value !== "None")
                  .join(" • ")}
              </p>
             
            </div>  

            {/* QTY  */}
            <div className="cart-qty">
              <div className="cart-qty-wrapper">
                {/* MINUS  */}
                <div
                 className="plus-minus"
                 onClick={() => drink.quantity === 1 ? 
                  removeFromCart(drink.cartItemId) : 
                  updateQuantity(drink.drinkItemId, Number(drink.quantity) - 1)
                 }
                >
                  {drink.quantity === 1 ? (
                    <i className="fa-solid fa-trash"/>
                  ) : (
                    <i className="fa-solid fa-minus"/>
                  )}
                 
                </div>

                <span className="qty">{drink.quantity}</span>

                <div 
                  className="plus-minus"
                  onClick={() => updateQuantity(drink.drinkItemId, Number(drink.quantity) + 1)}
                >
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