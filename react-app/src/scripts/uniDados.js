import * as utils from "./myUtils.js";

export const DISCIPLINAS = [];

export const PROFESSORES = [];

export const ALUNOS = new Map();

export const CURSOS = new Map();

export const TURMAS = new Map();

export const DIAS_DA_SEMANA = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

export const HORAS = utils.gerarHoras(8, 22, 1).toString();

salvaDisciplina();
salvaDisciplina();
salvaDisciplina();
salvaDisciplina();
salvaDisciplina();
salvaCursos();
salvaCursos();
salvaCursos();


function salvaDisciplina() {
        setDisc(utils.getRandonChar().toLowerCase());
}

function salvaCursos() {
        setCursos(crypto.randomUUID(), utils.getRandonChar().toUpperCase());
}

export function salvaAluno(...alunoDados) {
    const [ nome, idade, endereco, matriculaId, curso, disciplinas, semestre ] = alunoDados;
    console.log(alunoDados)
    setAluno(matriculaId, [nome, idade, endereco, curso, disciplinas, semestre]);
}

export function getTurmas() {
    return TURMAS;
}

export function getDisciplinas() {
    return DISCIPLINAS;
}
export function getAlunos() {
    return ALUNOS;
}
export function getProfessores() {
    return PROFESSORES;
}

export function getCursos() {
    return CURSOS;
}

export function setCursos(cursoCod, curso) {
    CURSOS.set(cursoCod, curso);
}
export function setProf(...prof) {
    PROFESSORES.push(prof);
}
export function setDisc(...disc) {
    DISCIPLINAS.push(disc);
}
export function setTurmas(...turmaDados) {

    const [cursoCod, disciplina, prof, aluno] = turmaDados;
    TURMAS.set(cursoCod, [prof, disciplina, aluno]);
}
export function setAluno(matriculaId, alunoDados) {
    ALUNOS.set(matriculaId, alunoDados);
}
console.log(ALUNOS);
