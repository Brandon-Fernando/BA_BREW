import { createContext, useContext, useEffect, useState } from "react";


const CartContext = createContext();

export const CartProvider = ({children}) => {

  // LOAD CART FROM LOCAL STORAGE 
  const [ cart, setCart ] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : []
  });

  // SAVE CART TO LOCAL STORAGE 
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ADD ITEM TO CART 
  const addToCart = (item) => {
    const cartItem = {
      ...item, 
      cartItemId: crypto.randomUUID(), 
      quantity: 1
    }

    setCart((prev) => [...prev, cartItem]);
  }

  // UPDATE QUANTITY 
  const updateQuantity = (id, quantity) => {
    setCart((prev) => 
      prev.map((item) => (
        item.cartId === id
        ? {...item, quantity}
        : item
    )))
  }

  return(
    <CartContext.Provider
      value={{
        cart, 
        setCart, 
        addToCart, 
        updateQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);