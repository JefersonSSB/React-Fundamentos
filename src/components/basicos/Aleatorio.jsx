import React from "react";

export default (props) => {
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2>Valor Aleatorio</h2>
      <p>
        <strong>MIN {min}</strong>
      </p>
      <p>
        {" "}
        <strong>MAX {max}</strong>
      </p>
      <p>
        {" "}
        <strong>Aleatorio {aleatorio}</strong>
      </p>
    </div>
  );
};
