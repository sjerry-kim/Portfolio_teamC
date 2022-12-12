import React, { useState } from "react";
import ApiMapContainer from "./ApiMapcontainer";
import "../css/ApiLandingPage.css";
import "../App.css";
function ApiLandingPage() {
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
          position: "relative",
          width: "100%",
          bottom: "820px",
        }}
      >
        <input
          className="api-input"
          placeholder="검색어를 입력하세요"
          onChange={onChange}
          value={InputText}
          style={{
            border: "none",
            borderBottom: "1px solid green",
            fontSize: "20px",
          }}
        />
        <button type="submit">검색</button>
      </form>
    </>
  );
}

export default ApiLandingPage;
