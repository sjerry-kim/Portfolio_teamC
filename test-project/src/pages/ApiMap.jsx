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
      <form
        className="api-inputForm"
        onSubmit={handleSubmit}
        style={{
          position: "absolute",
          bottom: "820px",
          padding: "10px",
          width: "100%",
        }}
      >
        <input
          className="api-input"
          placeholder="ex)      AGIO DESIGN"
          onChange={onChange}
          value={InputText}
          style={{
            position: "relative",
            display: "inline-block",
            border: "none",
            fontSize: "22px",
            marginLeft: "80px",
            borderBottom: "1px solid rgb(187, 163, 136)",
            padding: "10px",
            top: "38px",
            borderRadius: "22px",
            backgroundColor: "rgb(241, 238, 235)",
          }}
        />
        <button
          type="submit"
          style={{
            position: "relative",
            border: "none",
            color: " rgb(187, 163, 136)",
            backgroundColor: "rgb(241, 238, 235)",
            top: "38px",
            right: "40px",
            fontSize: "20px",
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </>
  );
}

export default ApiMap;
