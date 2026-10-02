import "./Header.css";

const Header = ({
  setMenuSidebarOpen, 
  setCartSidebarOpen
}) => {

  return(
    <div className="header-container">
      {/* LOGO  */}
      <div className="header-logo">
        <img src="/Home/temp.png" alt="Logo" className="header-logo-img"/>
      </div>

      {/* CART MENU  */}
      <div className="cart-menu">
        <i onClick={() => setCartSidebarOpen(true)} className="fa-solid fa-cart-shopping"/>

        <div 
          className="header-menu"
          onClick={() => setMenuSidebarOpen(true)}
        >
          <div className="header-line"/>
          <div className="header-line"/>
          <div className="header-line"/>
        </div>
      </div>
    </div>
  )
}

export default Header;