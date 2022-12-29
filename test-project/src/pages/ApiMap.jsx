import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ApiMapContainer from "../components/ApiMapcontainer";
import "../css/ApiMap.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function ApiMap() {
  const [InputText, setInputText] = useState("");
  const [Place, setPlace] = useState("");

  const onChange = e => {
    setInputText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setPlace(InputText);
    setInputText("");
  };

  return (
    <>
      <ApiMapContainer searchPlace={Place} />
      <form className="api-inputForm" onSubmit={handleSubmit}>
        <input
          className="api-input"
          placeholder="ex) design"
          onChange={onChange}
          value={InputText}
        ></input>
        <button type="submit" className="api-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </>
  );
}

export default ApiMap;
