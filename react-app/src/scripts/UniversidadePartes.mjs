
const CURSOS = [
    "Math", "Science", "History"
];

const DISCIPLINAS = [
    "A", "B", "C"
];

const DIAS_DA_SEMANA = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
];

const HORAS = geraHoras();

function geraHoras() {
    const horas = [];
    for (let hora = 8; hora <= 22; hora++) {
        horas.push(`${hora.toString().padStart(2, '0')}:00`);
    }
    return horas;
}
export const ENUMS = {
    curso: CURSOS,
    disciplina: DISCIPLINAS,
    dias: DIAS_DA_SEMANA,
    hora: HORAS
}


function criarNovaTurma() {
    return prompt("Insira o nome da turma:\t");
}

