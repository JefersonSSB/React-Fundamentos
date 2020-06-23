import React, { Component } from "react";
import "./Contador.css";
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInical || 1,
  };

  inc = () => {
    this.setState({ numero: this.state.numero + this.state.passo });
  };

  dec = () => {
    this.setState({ numero: this.state.numero - this.state.passo });
  };
  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  render() {
    return (
      <div className="Contador">
        <Display />
        <h3>{this.state.numero}</h3>
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <Botoes incrementar={this.inc} decrementar={this.dec} />
      </div>
    );
  }
}
export default Contador;
