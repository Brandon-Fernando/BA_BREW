// import Button from "../../components/Button/Button";
// import "./Home.css";
// import { motion } from "motion/react";
// import { lineSlide, titleSlide, staggerContainer, staggerChildren } from "../../animations/motionVariants";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   return(
//     <motion.div 
//       className="home-container"
//     >
//       {/* LOGO  */}
//       <img src="/Home/Main_Logo.png" alt="Main Logo" className="home-logo"/>

//       {/* BUTTON  */}

//       <div className="illustration-button-container">
//         <img src="/Home/Chairs.png" alt="Chairs" className="illustration"/>

//         <button className="home-button button red">
//           start order
//         </button>
//       </div>

      
//     </motion.div>
//   )
// }

// export default Home;

import { useEffect, useState } from "react";
import "./Home.css";
import { motion } from "motion/react";
import { staggerChildren, staggerContainer } from "../../animations/motionVariants";
import { useNavigate } from "react-router-dom";

const imageSources = ["/Home/Main_Logo.png", "/Home/Chairs.png"];

const Home = () => {
  const [status, setStatus] = useState("loading");
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    const loadImages = async () => {
      try {
        await Promise.all(
          imageSources.map((src) => {
            const img = new Image();
            img.src = src;
            return img.decode();
          })
        );

        if (!cancelled) setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    };

    loadImages();

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "loading") {
    return <div role="status">Loading…</div>;
  }

  if (status === "error") {
    return <div role="alert">Images couldn’t load. Please refresh.</div>;
  }

  return (
    <motion.div
      className="home-container"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        src="/Home/Main_Logo.png"
        alt="Main Logo"
        className="home-logo"
        variants={staggerChildren}
      />

      <div className="illustration-button-container">
        <motion.img
          src="/Home/Chairs.png"
          alt="Chairs"
          className="illustration"
          variants={staggerChildren}
        />

        <motion.button 
          className="home-button button red"
          variants={staggerChildren}
          onClick={() => navigate("/menu")}
        >
          start order
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Home;