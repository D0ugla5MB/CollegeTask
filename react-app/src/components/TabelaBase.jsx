import React from "react";
import { initializeMatrix } from "../scripts/myUtils.js";



export default function Tabela() {
    const matriz = initializeMatrix(16, 8, 0);

    return (
        <>
            {matriz.map((linha, li) => (
                <div key={li} >
                    {linha.map((slot, ci) => (
                        <span key={ci} >
                            {slot}
                        </span>
                    ))}
                </div>
            ))}
        </>
    );

}