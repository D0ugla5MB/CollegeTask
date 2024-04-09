import React from 'react';
import { initializeMatrix } from '../scripts/myUtils';
import "../styles/Tabela.css";

const tabela = initializeMatrix(16, 8, "dados");

export default function TabelaHoraria({dados}) {
    return (
        <div className='table'>
            {tabela.map((linha, linhaIndex) => (
                <TabelaLinha key={linhaIndex} celulas={linha} dados={dados}  />
            ))}
        </div>
    );
}


export function TabelaCelula({ conteudo, spanKey }) {
    return (
        <span className='cell' key={spanKey}>{conteudo}</span>
    );
}

export function TabelaLinha({ celulas, linhaKey, dados }) {
    return (
        <div className='row' key={linhaKey}>
            {celulas.map((conteudo, celulaIndex) => (
                <TabelaCelula key={celulaIndex} conteudo={dados}/>
            ))}
        </div>
    );
}



