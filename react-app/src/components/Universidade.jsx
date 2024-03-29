import React from 'react';
import  HomeBotao  from "./HomeBotao";
import Cursos from "./UniversidadeCursos";
import { Form } from './UniversidadeCursos';
import UniversidadeMenu from './UniversidadeMenu';
export default function Universidade() {
    return (
        <>
            <div>
                <UniversidadeMenu/>
                <br></br>
                <HomeBotao />
            </div>
        </>
    );
}



