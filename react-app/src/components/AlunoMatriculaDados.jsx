import React from "react";

export default function MatriculaDados([matriculaId, curso, disciplinas, semestre]){
    return (
        <div>
            <h3>Registro acadêmico: {`${matriculaId}`}</h3>
            <h3>Curso: {`${curso}`}</h3>
            <h3>Semestre: {`${semestre}`}</h3>
            <h3>Disciplinas:</h3>
            {disciplinas.length > 0 ? (
                <ul>
                    {disciplinas.map((disciplina, index) => (
                        <li key={index}>{disciplina}</li>
                    ))}
                </ul>
            ) : (
                <h4>Nenhuma disciplina encontrada</h4>
            )}

        </div>
    );
}