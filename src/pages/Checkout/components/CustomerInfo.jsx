import { FIELDS, formatPhoneNumber } from "./customerFields";

const CustomerInfo = () => {
  
  const renderField = ({field, title, placeholder, icon}) => {
    return(
      <div key={field} className="field">
        <span>{title}</span>

        <div className="input-wrapper">
          <i className={`${icon} input-icon`}/>

          <input 
            type={field === "phoneNumber" ? "tel" : "text"}
            inputMode={field === "phoneNumber" ? "numeric" : undefined}
            name={field}
            className="input-text"
            placeholder={placeholder}
          />
        </div>
      </div>
    )
  } 

  
  return(
    <div className="customer-info-container">
      <div className="flname-container">
        {FIELDS
        .filter((f) => f.field === "firstName" || f.field === "lastName")
        .map(renderField)}
      </div>

      <div className="number-container">
        {FIELDS
        .filter((f) => f.field !== "firstName" && f.field !== "lastName")
        .map(renderField)}
      </div>
    </div>
  )
}

export default CustomerInfo;