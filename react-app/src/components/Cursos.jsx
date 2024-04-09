import React, { useState } from "react";
import { createPortal } from "react-dom";
import "../styles/Modal.css";
import { getTurmas, setTurmas } from "../scripts/uniDados";
import { criaTurma } from "./Universidade";

/* export function CursosListaNav({ cursoDados }) {
    return (
        <nav>
            {cursoDados.map((c, ind) => (
                <li key={ind}>{c.cursoNome}</li>
            ))}
        </nav>
    );
}
 */


function FormComponent({ onUpdate }) {
    const [cursoCod, setCursoCod] = useState('');
    const [disciplina, setDisciplina] = useState('');
    const [prof, setProf] = useState('');
    const [aluno, setAluno] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            cursoCod,
            disciplina,
            prof,
            aluno
        };
        onUpdate(formData);

        setCursoCod('');
        setDisciplina('');
        setProf('');
        setAluno('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="cursoCod">Curso Code:</label>
            <input type="text" id="cursoCod" name="cursoCod"
                value={cursoCod} onChange={(e) => setCursoCod(e.target.value)}
                required />

            <label htmlFor="disciplina">Disciplina:</label>
            <input type="text" id="disciplina" name="disciplina"
                value={disciplina} onChange={(e) => setDisciplina(e.target.value)}
                required />

            <label htmlFor="prof">Professor:</label>
            <input type="text" id="prof" name="prof"
                value={prof} onChange={(e) => setProf(e.target.value)}
                required />

            <label htmlFor="aluno">Aluno:</label>
            <input type="text" id="aluno" name="aluno"
                value={aluno} onChange={(e) => setAluno(e.target.value)}
                required />

            <button type="submit">Submit</button>
        </form>
    );
}

export  function CursoJanelaInfo({
    cursoCodigo: cod,
    cursoNome: n,
    cursoDisciplinas: dis,
    cursoProfs: profs,
    cursoAlunos: alu,
    cursoTurmas: t
}) {
    const [isOpen, setIsOpen] = useState(false);

    function handleFormUpdate (data) {
        const {cursoCod, disciplina, prof, aluno} = data
        criaTurma(cursoCod, disciplina, prof, aluno);
    };

    function togglePopup(){
        setIsOpen(!isOpen);
    };
    return (
        <>
            <button key={cod} onClick={togglePopup}>{n}</button>

            {
                isOpen && createPortal(
                    <div className="modal">
                        <div className="modal-content">
                            <FormComponent onUpdate={handleFormUpdate} />
                            <button onClick={() => setIsOpen(false)} >Close</button>
                        </div>
                    </div>,
                    document.getElementById(janelaResId)
                )
            }
        </>
    );
}
const janelaResId = "janela_res";
export function CursosLista({ cursoDados }) {
    return (
        <>
            {cursoDados.map((curso, index) => (

                <CursoJanelaInfo
                    key={index}
                    cursoCodigo={curso.cursoCodigo}
                    cursoNome={curso.cursoNome}
                    cursoDisciplinas={curso.cursoDisciplinas}
                    cursoProfs={curso.cursoProfs}
                    cursoAlunos={curso.cursoAlunos}
                    cursoTurmas={curso.cursoTurmas} />
            ))}
            <div id={`${janelaResId}`}></div>
            <button onClick={
                () => console.log(getTurmas())
            }>Turmas</button>
        </>
    );
}



export function Cursos({ cursoDados }) {
    return (
        <>
            <CursosLista cursoDados={cursoDados} />

        </>
    );
}