import React from "react";
import { useState } from "react";
import "./Input.css";
export default (props) => {
  const [valor, setValor] = useState("Incial");

  function quandoMudar(e) {
    setValor(e.target.value);
  }
  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div className="Box">
        <input value={valor} onChange={quandoMudar} />
        <input value={valor} readOnly />
        <input value={undefined} />
      </div>
    </div>
  );
};
