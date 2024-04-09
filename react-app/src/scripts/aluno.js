import * as dados from "./uniDados";
import * as utils from "./myUtils.js";

export function getAlunoInfo(matriculaId = null) {
    if (matriculaId === null) {
        return (
            getAlunos().get(0)
        );
    }
    return;
}
export function criaAluno() {
        const nome = utils.getRdnBrPerson().firstName;
        const idade = utils.getRandomInteger(18, 50);
        const endereco = `${utils.customFaker.location.city()}___${utils.customFaker.location.state()}`;
        const matriculaId = utils.getRandomInteger(1, 5);
        const curso = dados.getCursos();
        const disciplinas = dados.getDisciplinas();
        const semestre = utils.getRandomInteger(1, 8);
    return [nome, idade, endereco, matriculaId, curso, disciplinas, semestre];
}
