import React from "react";
import { Link } from "react-router-dom";

export default function HomeBotao(){
    return(
        <>
            <Link to={"/"}>
                <button>Início</button>
            </Link>
        </>
    );
}