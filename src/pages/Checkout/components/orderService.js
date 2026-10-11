import { db } from "../../../../utils/firebase";
import { collection, addDoc, serverTimestamp, getDocs, updateDoc, doc } from "firebase/firestore";

const generateOrderNumber = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

export const createOrder = async ({checkoutData, cart}) => {

  const orderData = {
    orderNumber: generateOrderNumber(),
    customerInfo: checkoutData, 
    cart: cart
  }

  const docRef = await addDoc(collection(db, "orders"), orderData)

  return docRef.id
}