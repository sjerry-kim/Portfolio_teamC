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
          bottom: "840px",
          backgroundColor: "rgb(241,238,235)",
        }}
      >
        <input
          className="api-input"
          placeholder="ex) AGIO DESIGN"
          onChange={onChange}
          value={InputText}
          style={{
            position: "relative",
            display: "inline-block",
            border: "none",
            borderBottom: "1px solid rgb(187, 163, 136)",
            fontSize: "22px",
            width: "22.6vw",
            backgroundColor: "rgb(241,238,235)",
          }}
        />
        <button
          type="submit"
          style={{
            border: "none",
            color: " rgb(187, 163, 136)",
            marginLeft: "10px",
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </>
  );
}

export default ApiMap;
