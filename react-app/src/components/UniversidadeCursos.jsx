import React, { useState } from "react";
import * as UniParte from "../scripts/UniversidadePartes.mjs";

export default function Cursos() {
    const cursos = ["A", "B", "C"];
    return (
        <>
            <div>
                <h1>CURSOS DA UNIVERSIDADE</h1>
                <ul>
                    {cursos.map((curso, id) => (
                        <li key={id}>{curso}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export function Form() {
    const cursosOpcoes = UniParte.CURSOS;
    const turmasOpcoes = UniParte.DISCIPLINAS;

    const [course, setCourse] = useState('');
    const [period, setPeriod] = useState('');
    const [selectedClass, setSelectedClass] = useState('');

    const handleCourseChange = (event) => {
        setCourse(event.target.value);
    };

    const handlePeriodChange = (event) => {
        setPeriod(event.target.value);
    };

    const handleClassChange = (event) => {
        setSelectedClass(event.target.value);
    };

    return (
        <div>
            <form>
                <label>
                    Course:
                    <select value={course} onChange={handleCourseChange}>
                        {cursosOpcoes.map((course, index) => (
                            <option key={index} value={course}>{course}</option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Period:
                    <div>
                        <input type="radio" id="morning" name="period" value="Morning" onChange={handlePeriodChange} />
                        <label htmlFor="morning">Morning</label>
                        <br />
                        <input type="radio" id="afternoon" name="period" value="Afternoon" onChange={handlePeriodChange} />
                        <label htmlFor="afternoon">Afternoon</label>
                        <br />
                        <input type="radio" id="evening" name="period" value="Evening" onChange={handlePeriodChange} />
                        <label htmlFor="evening">Evening</label>
                    </div>
                </label>
                <br />
                <label>
                    Class:
                    <select value={selectedClass} onChange={handleClassChange}>
                        {turmasOpcoes.map((className, index) => (
                            <option key={index} value={className}>{className}</option>
                        ))}
                    </select>
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
