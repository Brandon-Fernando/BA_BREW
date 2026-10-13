import { useState } from "react";
import "./Admin.css";
import { ADMIN_FIELDS } from "./adminFields";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { useNavigate } from "react-router-dom";

const AdminSignIn = () => {
  const [values, setValues] = useState({
    email: "", 
    password: ""
  })
  const [signInError, setSignInError] = useState("");
  const [errors, setErrors] = useState({});

   const validateField = (field, value) => {
    if(!value.trim()) {
      return { 
        email: "error", 
        password: "error"
      }[field];
    }

    return "";
  }
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => {
      if (!previous[name]) return previous;

      return {
        ...previous,
        [name]: validateField(name, value),
      };
    });
  };

  const handleSignIn = async (event) => {
    

    const nextErrors = Object.fromEntries(
      Object.entries(values).map(([field, value]) => [
        field, 
        validateField(field, value)
      ])
    );

    setErrors(nextErrors);

    const firstInvalidField = Object.keys(nextErrors).find(
      (field) => nextErrors[field]
    );

    if (firstInvalidField) {
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        values.email.trim(),
        values.password
      );

      const token = await user.getIdTokenResult();

      if (token.claims.admin !== true) {
        setSignInError("You don't have admin access.");
        return;
      }

      navigate("/admin/orders", { replace: true });
    } catch (error) {
      setSignInError("Unable to sign in. Check your email and password.");
    }
  }

  const renderField = ({field, title, placeholder, icon}) => {
    const error = errors[field];

    return(
      <div key={field} className={`field ${error ? "error" : ""}`}>
        {/* FIELD TITLE  */}
        <div className="field-title-form">
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
            type="text"
            name={field}
            values={values[field]}
            onChange={handleChange}
            className="input-text"
            aria-invalid={Boolean(error)}
            aria-describedby={error ?  `${field}-error` : undefined}
          />
        </div>
      </div>
    )
  }

  return(
    <div className="admin-container">
      {/* TITLE  */}
      <img src="/Admin/Admin.png" alt="Admin" className="admin-title"/>

      <div className="admin-signin">
        <div className="admin-form">
          {ADMIN_FIELDS.map(renderField)}
        </div>

        {signInError}

        <button onClick={() => handleSignIn()} className="admin-signin-button button red">
          sign in 
        </button>
      </div>
    </div>
  )
}

export default AdminSignIn;