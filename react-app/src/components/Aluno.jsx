import React from 'react'

import BotaoHome from './BotaoHome';
import DadosGerais from './Pessoa';
import MatriculaDados from './AlunoMatriculaDados';
import BotaoVerGrade from './BotaoGradeHoraria';
import { getAlunos, salvaAluno } from '../scripts/uniDados';
import { criaAluno } from '../scripts/aluno.js';



salvaAluno(criaAluno());
salvaAluno(criaAluno());
salvaAluno(criaAluno());
salvaAluno(criaAluno());
salvaAluno(criaAluno());
export default function Aluno() {
    const [ nome,
        idade,
        endereco,
        matriculaId,
        curso,
        disciplinas,
        semestre ] = getAlunos();

    return (
        <>
            <h1>INFORMAÇÕES DO ALUNO</h1>
            <h2>Dados gerais</h2>
            <DadosGerais nome={nome} idade={idade} endereco={endereco} />
            <MatriculaDados
                matriculaId={matriculaId}
                curso={curso}
                disciplinas={disciplinas} semestre={semestre} />
            <BotaoVerGrade />
            <BotaoHome />
        </>
    );
}