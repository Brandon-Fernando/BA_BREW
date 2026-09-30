import "./Button.css";

const Button = ({size, text, onClick}) => {

  return(
    // <div className="button-shadow">
    <>
      {size === "regular" ? (
        <button onClick={onClick} className="button-regular">{text}</button>
      ) : (
        <button className={`button ${size}`}>{text}</button>
      )}
    </>
    
    // {/* </div> */}
  )
}

export default Button;