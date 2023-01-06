import { useState } from "react";
import "../css/JoinInput.css";

const JoinInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="joinForm_formInput">
      <label className="joinForm_label">{label}</label>
      <input className="joinForm_input"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="joinForm_span">{errorMessage}</span>
    </div>
  );
};

export default JoinInput;
