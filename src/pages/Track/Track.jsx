import { useState, useEffect } from "react";
import SearchResult from "./components/SearchResult";
import "./Track.css";
import { subscribeToOrders } from "../Checkout/components/orderService";
import { motion } from "motion/react";
import { staggerContainer, staggerChildren } from "../../animations/motionVariants";

const Track = () => {
  const [orders, setOrders] = useState([]);
  const [searchedOrders, setSearchedOrders] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("")

  useEffect(() => {
    const unsubscribe = subscribeToOrders(
      (latestOrders) => {
        setOrders(latestOrders);
        // setError(null);
        // setLoading(false);
      },
      (err) => {
        console.error("Failed to listen for orders:", err);
        // setError("Unable to receive live order updates.");
        // setLoading(false)
      }
    )

    return () => unsubscribe()
  }, []);

  const handleSearchOrders = (number) => {
    const filteredOrders = orders.filter((order) => order.customerInfo.phoneNumber === number)

    setSearchedOrders(filteredOrders);
    console.log(searchedOrders)
  }

  const handleChange = (event) => {
    setPhoneNumber(event.target.value)
  }
  



  return(
    <div className="track-container">
      {/* TITLE  */}
      <img src="/Track/Track.png" alt="Track" className="track-title"/>


      {/* SEARCHBAR  */}
      <div className="search-wrapper">
        <span>enter your phone number</span>

        <div className="searchbar-wrapper">
          {/* SEARCHBAR  */}
          <div className="searchbar">
            <i className="fa-solid fa-phone"/>

            <input 
              type="tel" 
              inputMode="numeric"
              className="searchbar-input"
              onChange={handleChange}
            />

            
          </div>
        </div>

        <button 
          className="search-btn button red"
          onClick={() => handleSearchOrders(phoneNumber)}
        >
          Search
        </button>
      </div>


      {/* RESULTS  */}
      {searchedOrders.length > 0 && (
        <motion.div 
          className="search-results-wrapper"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={staggerChildren} className="search-results-title">Results</motion.span>

          {searchedOrders.map((order) => (
            <motion.div variants={staggerChildren}>
              <SearchResult 
                order={order}
                key={order.orderNumber}
              />
            </motion.div>
          ))}
          
        </motion.div>
      )}
      
    </div>
  )
}

export default Track;