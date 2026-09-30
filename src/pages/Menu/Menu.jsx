import CoffeeCards from "../../components/MenuCards/CoffeeCards";
import MenuList from "./components/MenuList";
import "./Menu.css";

const Menu = () => {

  return(
    <div className="menu-container">
      {/* TITLE  */}
      <img src="/Menu/Menu.png" alt="Menu" className="menu-title"/>

      {/* MENU LIST  */}
      <CoffeeCards />
    </div>
  )
}

export default Menu;