import { db } from "../../../../utils/firebase";
import { collection, addDoc, serverTimestamp, getDocs, updateDoc, doc } from "firebase/firestore";

const generateOrderNumber = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

export const createOrder = async ({checkoutData, cart}) => {

  const orderData = {
    orderNumber: generateOrderNumber(),
    customerInfo: checkoutData, 
    cart: cart, 
    status: "preparing", 
    orderedAt: serverTimestamp()
  }

  const docRef = await addDoc(collection(db, "orders"), orderData)

  return docRef.id
}

export const getAllOrders = async () => {
  const querySnapshot = await getDocs(collection(db, "orders"));

  return querySnapshot.docs.map((orderDoc) => ({
    id: orderDoc.id, 
    ...orderDoc.data(),
  }))
}

export const updateOrderStatus = async (orderId, orderStatus) => {
  const orderRef = doc(db, "orders", orderId);

  await updateDoc(orderRef, {
    status: orderStatus,
  })
}