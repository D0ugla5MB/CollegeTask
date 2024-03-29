import React from 'react'
import { Link } from 'react-router-dom';

export default function TelaInicial(){
    return(
        <>
            <Link to={"./universidade"}><button type="button" >Login do Servidor</button></Link>
            <Link><button type="button" >Login do Aluno</button></Link>
            <Link><button type="button" >Login do Professor</button></Link>
        </>
    );
}