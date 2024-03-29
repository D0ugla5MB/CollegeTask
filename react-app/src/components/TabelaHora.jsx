import React from 'react';
import "../styles/Tabela.css";
import { ENUMS } from "../scripts/UniversidadePartes.mjs";
import TabelaCelula from './TabelaCelula';

function gerarTabelaBase() {
    const matriz = [];
    const dias = 7;
    const horas = 15;

    for (let i = 0; i <= horas; i++) {
        const row = [];
        for (let j = 0; j <= dias; j++) {
            row.push(<span key={`${i}x${j}`}>{j}</span>);
        }
        matriz.push(<div key={i}>{row}</div>);
    }
    return matriz;
}

export default function TabelaHora() {
    const dds = ENUMS.dias;
    const h = ENUMS.hora;
    const matriz = gerarTabelaBase();
    let rowId = 0;

    return (
        <div className='table'>
            {
                matriz
                    .map(
                        (hora, horaInd) => {
                            return (
                                <div key={rowId++} className='row'>
                                    {
                                        hora.props.children.map((dia, diaInd) => {
                                            if (horaInd === 0 && diaInd === 0) {
                                                return (
                                                    <div className='cell'>
                                                        <span className='spaced-span'>HORA/DIA</span>
                                                    </div>
                                                );
                                            }
                                            if (horaInd === 0 && diaInd > 0) {
                                                return (
                                                    <div className='cell'>
                                                        <span className='spaced-span'>{`${dds[diaInd - 1]}`}</span>
                                                    </div>
                                                );
                                            }
                                            if (diaInd === 0 && horaInd > 0) {
                                                return (
                                                    <div className='cell' >
                                                        <span className='spaced-span'>{`${h[horaInd - 1]}`}</span>
                                                    </div>
                                                );
                                            }
                                            return <TabelaCelula celulaKey={crypto.randomUUID()} />;
                                        }
                                        )
                                    }
                                </div>
                            );
                        }
                    )
            }
        </div>
    );
}