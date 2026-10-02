import { useParams } from "react-router-dom";
import BackButton from "../../../components/Button/BackButton";
import MenuList from "./MenuList";
import CursiveTitles from "../../../components/CursiveTitles/CursiveTitles";

const MenuOption = () => {
  const { menuOption } = useParams();

  return(
    <div className="menu-option-container">
      <BackButton path={"/menu"}/>

      {/* SPECIALTY DRINKS  */}
      <div className="specialty-drinks-wrapper">
        {/* <hr className="title-line"/> */}

        <span className="specialty-title">Specialty</span>

        <div className="cursive-subtitle">
          <CursiveTitles type={"drinks"}/>
        </div>

        {/* <hr className="title-line"/> */}
      </div>

      <MenuList coffeePath={menuOption}/>
    </div>
  )
}

export default MenuOption;