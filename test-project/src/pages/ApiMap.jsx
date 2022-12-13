import React, { useState } from "react";
import ApiMapContainer from "../components/ApiMapcontainer";
import "../css/ApiMap.css";
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
      <ApiMapContainer searchPlace={Place}>
        <form
          className="api-inputForm"
          onSubmit={handleSubmit}
          style={{
            position: "relative",
            width: "470px",
            bottom: "673px",
            border: "1px solid red",
          }}
        >
          <input
            className="api-input"
            placeholder="ex) AGIO DESIGN"
            onChange={onChange}
            value={InputText}
            style={{
              display: "inline-block",
              border: "none",
              borderBottom: "1px solid green",
              fontSize: "20px",
            }}
          />
          <button type="submit">검색</button>
        </form>
      </ApiMapContainer>
    </>
  );
}

export default ApiMap;
