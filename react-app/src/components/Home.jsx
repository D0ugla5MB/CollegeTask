import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function TelaSelecao() {
    return (
        <>
            <div>
                <h1>Escolha a visualização:</h1>
                <button>
                    <a href="/aluno">Aluno</a>
                </button>
                <button>
                    <a href='/universidade'>Universidade</a>
                </button>
            </div>
        </>
    );
}

export default TelaSelecao