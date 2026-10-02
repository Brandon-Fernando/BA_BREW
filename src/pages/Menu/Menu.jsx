import CursiveTitles from "../../components/CursiveTitles/CursiveTitles";
import CoffeeCards from "../../components/MenuCards/CoffeeCards";
import MenuList from "./components/MenuList";
import "./Menu.css";

const Menu = () => {

  return(
    <div className="menu-container">
      {/* TITLE  */}
      {/* <img src="/Menu/Menu.png" alt="Menu" className="menu-title"/> */}
      <div className="menu-title">
        <span>Drinks</span>
        
        <div className="menu-cursive">
          <CursiveTitles type="menu"/>
        </div>
        
      </div>

      {/* MENU LIST  */}
      <CoffeeCards />
    </div>
  )
}

export default Menu;