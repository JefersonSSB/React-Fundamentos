import React from "react";
import If, { Else } from "./if";

export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If teste={usuario && usuario.nome}>
        Seja vem vindo <strong>{usuario.nome}</strong>
        <Else>
          Seja vem vindo <strong>Amigão</strong>
        </Else>
      </If>
    </div>
  );
};
