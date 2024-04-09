import React, { useState } from "react";
import GradeHoraria from "./GradeHoraria";
import TabelaHoraria from "./TabelaHoraria";
import { getRandonChar, getRdnBrPerson } from "../scripts/myUtils";

const d = [
    getRdnBrPerson().firstName,
];

export default function BotaoVerGrade() {

    return (
        <>
            <GradeHoraria />
            <div>
                <details>
                    <summary>Ver Grade</summary>
                    <TabelaHoraria dados={d} />
                </details>
            </div>
        </>
    );
}