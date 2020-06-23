import React from "react";

export default function (props) {
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";
  return (
    <div>
      <h2>{props.titulo}</h2>
      <h3>
        {props.aluno} tem nota {props.nota}
      </h3>
      {status}
    </div>
  );
}
