import "./Button.css";

const Button = ({size, text, onClick, type}) => {

  return(
    // <div className="button-shadow">
    <>
      {size === "regular" ? (
        <button onClick={onClick} className={`button-regular ${type}`}>{text}</button>
      ) : (
        <button onClick={onClick} className={`button ${size}`}>{text}</button>
      )}
    </>
    
    // {/* </div> */}
  )
}

export default Button;