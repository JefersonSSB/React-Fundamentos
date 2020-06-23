import React from "react";
import "./App.css";

import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParamentro from "./components/basicos/ComParamentro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListaProdutos from "./components/repeticao/TabelaProduto";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default () => (
  <div className="App">
    <h1>Funtamento React</h1>

    <div className="Cards">
      <Card titulo="Mega" color="#311">
        <Mega />
      </Card>
      <Card titulo="Contador" color="#131">
        <Contador numeroInicial={10} />
      </Card>
      <Card titulo="Componenet Controlado" color="#856">
        <Input />
      </Card>
      <Card titulo="Comunicação Indireta" color="#348">
        <IndiretaPai />
      </Card>

      <Card titulo="Comunicação Direta" color="#526">
        <DiretaPai />
      </Card>

      <Card titulo="Condicional 2" color="#606">
        <UsuarioInfo usuario={{ nome: "Jeferson" }}></UsuarioInfo>
        <UsuarioInfo usuario={{ email: "Jeferson@com.br" }}></UsuarioInfo>
        <UsuarioInfo usuario={{}}></UsuarioInfo>
      </Card>
      <Card titulo="Condicional" color="#686">
        <ParOuImpar numero={20}></ParOuImpar>
      </Card>

      <Card titulo="Repeticao 2" color="#880">
        <ListaProdutos></ListaProdutos>
      </Card>
      <Card titulo="Repeticao" color="#803">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="Familia" color="#888">
        <Familia sobrenome="Mota">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Thiago" />
          <FamiliaMembro nome="Joao" />
        </Familia>
      </Card>
      <Card titulo="Desafio Aleatorio" color="#080">
        <Aleatorio min={1} max={60}></Aleatorio>
      </Card>
      <Card titulo="Primeiro Elemento" color="#800">
        <Primeiro></Primeiro>
      </Card>
      <Card titulo="Notas" color="#008">
        <ComParamentro titulo="Situação" aluno="Jeferson" nota={10.0} />
      </Card>
      <Card titulo="Fragmento" color="#000">
        <Fragmento></Fragmento>
      </Card>
    </div>
  </div>
);
