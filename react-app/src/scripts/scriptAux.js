import * as uniDados from "./uniDados";
import * as aluno from "./aluno";
import * as scriptAux from "./scriptAux";
import * as utils from "./myUtils";
import { criaTurma } from "../components/Universidade";
import React from "react";
import Aluno from "../components/Aluno";
import { getRdnBrPerson, getRandomInteger, customFaker } from "./myUtils";
import { CURSOS } from "./uniDados";

const func = {
    aux_aluno_criacao: scriptAux.auxAlunoCriacao,
    gerar_aluno: gerarAluno,
    registrar_Aluno: aluno.registrarAluno, //usar gerarAluno para funcionar
    get_AlunoInfo: aluno.getAlunoInfo

};


export function testar(t, ...param) {
    
    return t(...param);
}

function aux(func){
    return func();
}

export function testaAluno(){
    return uniDados.getAlunos();
}


export function testaCurso(){
    uniDados.setCursos(gerarCurso(utils.getRandomInteger(1, 10)));
    return uniDados.getCursos();
}

export function testaDisciplina(){
    uniDados.setDisc(gerarDisciplina(utils.getRandomInteger(1, 10)));
    return uniDados.getDisciplinas();
}

export function testaTurma(){
    criaTurma(cursoCod, disciplina, prof, aluno);
    return uniDados.getTurmas();
}

function gerarCurso(n){
    const list = [];
    while(n > 0){
        const obj = {cursoCod: n, curso: utils.getRandonChar().toUpperCase()};
        list.push(obj);
        n--;
    }
    return list;
}
function gerarDisciplina(n){
    const list = [];
    while(n > 0){
        const obj = [utils.getRandonChar().toLowerCase()];
        list.push(obj);
        n--;
    }
    return list;
}

function gerarAluno(n, fAux){
    const list = [];
    while (n > 0) {
        list.push(fAux());
        n--;
    }
    return list;
}

export function auxAlunoCriacao() {
    return ({
        nome: getRdnBrPerson().firstName,
        idade: getRandomInteger(18, 50),
        endereco: `${customFaker.location.city()}___${customFaker.location.state()}`,
        matriculaId: crypto.randomUUID(),
        curso: "curso",
        disciplinas: "disciplina",
        semestre: getRandomInteger(1, 8)
    });
}





