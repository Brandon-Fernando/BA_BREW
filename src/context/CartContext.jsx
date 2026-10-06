import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";


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
      cartItemId: uuidv4(), 
      quantity: 1
    }

    setCart((prev) => [...prev, cartItem]);
  }

  // UPDATE QUANTITY 
  const updateQuantity = (id, quantity) => {
    setCart((prev) => 
      prev.map((item) => (
        item.cartItem === id
        ? {...item, quantity}
        : item
    )))
  }

  const removeFromCart = (id) => {
    setCart((prev) => 
      prev.filter(
        (item) => !(item.cartItemId === id)
      )
    );
  };

  const clearCart = () => {
    setCart([])
  }

  return(
    <CartContext.Provider
      value={{
        cart, 
        setCart, 
        addToCart, 
        updateQuantity, 
        removeFromCart, 
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);