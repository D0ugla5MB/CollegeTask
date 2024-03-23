import React from 'react';
import { BotaoHome } from "./HomeBotao";
import { getPerson } from '../utils/myUtils.mjs';

function NovoAluno(){
    return getPerson();
}

function AlunoView() {
    // Lógica específica para a visualização do aluno, se necessário

    return (
        <>
            <div>
                <h2>Visualização do Aluno</h2>
                {/* Conteúdo específico para a visualização do aluno */}
                <p>Detalhes do aluno</p>
            </div>
            <div>
                <BotaoHome />
            </div>
        </>
    );
}

export default AlunoView