import React, { useState, useEffect } from "react";
import "../styles/Tabela.css";

function TblCelBotao({ btnKey }) {
    const [novoBtnTxt, setBotaoTexto] = useState(() => {
        return localStorage.getItem(btnKey) === 'true';
    });

    useEffect(() => {
        localStorage.setItem(btnKey, novoBtnTxt);
    }, [btnKey, novoBtnTxt]);

    const botaoEstado = () => {
        setBotaoTexto(!novoBtnTxt);
    }
    let botaoEstilo = novoBtnTxt ? "button-content-color" : "";

    return (
        <button
            key={btnKey}
            className={botaoEstilo}
            onClick={botaoEstado}
        >{novoBtnTxt ? "HORÁRIO OCUPADO" : "HORÁRIO VAZIO"}</button>
    );
}

export default function TabelaCelula({ celulaKey }) {
    return (
        <span key={celulaKey} className='spaced-span'>
            <TblCelBotao btnKey={crypto.randomUUID()} />
        </span>
    );
}