import { Outlet } from "react-router-dom";
import "./Layout.css";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { backdropFade } from "../../animations/motionVariants";
import MenuSidebar from "../MenuSidebar/MenuSidebar";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import CartPopup from "../Popup/CartPopup";
import CartSidebar from "../CartSidebar/CartSidebar";

const Layout = () => {
  const location = useLocation();
  const [menuSidebarOpen, setMenuSidebarOpen] = useState(false);
  const [cartPopupOpen, setCartPopupOpen] = useState(false);
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);

  const overlayOpen = Boolean(
    menuSidebarOpen ||
    cartPopupOpen || 
    cartSidebarOpen
  );
  

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (!overlayOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow =
      document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow =
        previousHtmlOverflow;
    };
  }, [overlayOpen]);

  return(
    <div className="layout">
      {location.pathname !== "/checkout" && (
        <Header 
          setMenuSidebarOpen={setMenuSidebarOpen}
          setCartSidebarOpen={setCartSidebarOpen}
        />
      )}
      

      <Outlet 
        context={{
          setCartPopupOpen, 
          overlayOpen
        }}
      />

      <AnimatePresence mode="wait">
        {menuSidebarOpen && (
          <>
            <motion.div 
              className="backdrop"
              onClick={() => setMenuSidebarOpen(false)}
              variants={backdropFade}
              initial="hidden"
              animate="visible"
              exit="exit"
            />

            <MenuSidebar 
              onClose={() => setMenuSidebarOpen(false)}
            />
          </>
        )}

        {cartPopupOpen && (
          <>
            <motion.div 
              className="backdrop"
              onClick={() => setCartPopupOpen(false)}
              variants={backdropFade}
              initial="hidden"
              animate="visible"
              exit="exit"
            />

            <CartPopup />

          </>
        )}

        {cartSidebarOpen && (
          <>
            <motion.div 
              className="backdrop"
              onClick={() => setCartSidebarOpen(false)}
              variants={backdropFade}
              initial="hidden"
              animate="visible"
              exit="exit"
            />

            <CartSidebar onClose={() => setCartSidebarOpen(false)}/>
          </>
        )}
      </AnimatePresence>
     
    </div>
  )
}

export default Layout;