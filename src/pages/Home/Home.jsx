import Button from "../../components/Button/Button";
import "./Home.css";
import { motion } from "motion/react";
import { lineSlide, titleSlide } from "../../animations/motionVariants";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return(
    <div className="home-container">
      {/* LOGO  */}
      <img src="/Home/Main_Logo.png" alt="Main Logo" className="home-logo"/>

      {/* BUTTON  */}
      <div className="home-button-wrapper">
        <button
          className="home-button button red"
          onClick={() => navigate("/menu")}
        >
          start order
        </button>
      </div>
      
    </div>
  )
}

export default Home;