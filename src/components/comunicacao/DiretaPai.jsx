import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho nome="Jeferson" idade={20} nerd={true} />
      <DiretaFilho nome="Erik" idade={17} nerd={false} />
    </div>
  );
};
