import React from "react";

export default function DadosGerais({ nome, idade, endereco }) {
    return (
        <div>
            <h3>Nome: {`${nome}`}</h3>
            <h3>Idade: {`${idade}`}</h3>
            <h3>Endereço: {`${endereco}`}</h3>
        </div>
    );
}