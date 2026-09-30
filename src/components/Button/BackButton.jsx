import "./Button.css";
import { useNavigate } from "react-router-dom";

const BackButton = ({path}) => {
  const navigate = useNavigate();

  return(
    <div onClick={() => navigate(path)} className="back-button-container">
      <div className="back-button">
        <i className="fa-solid fa-angle-left"/>
      </div>

      <span>Back</span>
    </div>
  )
}

export default BackButton;