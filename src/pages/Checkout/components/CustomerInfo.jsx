import { FIELDS, formatPhoneNumber } from "./customerFields";

const CustomerInfo = ({
  values, 
  errors, 
  handleChange
}) => {
  
  const renderField = ({field, title, placeholder, icon}) => {
    const error = errors[field];

    return(
      <div key={field} className={`field ${error ? "error" : ""}`}>
        {/* FIELD TITLE  */}
        <div className="field-title-error">
          <span className="field-title">{title}</span>

          {error && (
            <div className="error-msg-wrapper">
              <div className="error-icon">
                <span>!</span>
              </div>

              <span className="error-msg">required</span>
            </div>
          )}
        </div>

        <div className="input-wrapper">
          <i className={`${icon} input-icon`}/>

          <input 
            type={field === "phoneNumber" ? "tel" : "text"}
            inputMode={field === "phoneNumber" ? "numeric" : undefined}
            name={field}
            value={values[field]}
            onChange={handleChange}
            className="input-text"
            placeholder={placeholder}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${field}-error` : undefined}
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