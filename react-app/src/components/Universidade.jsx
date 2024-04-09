import React from 'react'

import BotaoHome from './BotaoHome';
import { extractProps, getRdnBrPerson } from '../scripts/myUtils';
import { getTurmas, getCursos, setTurmas, getDisciplinas } from "../scripts/uniDados";
import { Cursos, CursosLista } from './Cursos';


export default function Universidade() {
    const cursoDados = extractProps(getCursos(), ["cursoCod", "curso"]);
    console.log(cursoDados);
    return (
        <>
            <h1>Cursos de Graduação</h1>
            <Cursos cursoDados={cursoDados}>
                <CursosLista cursoDados={cursoDados} />

            </Cursos>
            <br></br>
            <br></br>
            <BotaoHome />
        </>
    );
}



//turmaDados <--- cursoCod, disciplinas, prof, alunos
export function criaTurma(...turmaDados) {
    setTurmas(...turmaDados);
}