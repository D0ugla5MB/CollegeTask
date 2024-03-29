import React, { useState } from 'react';

export function botaoClick(botaoTexto) {
    const [novoBtnTxt, setBotaoTexto] = useState(botaoTexto);
    if (botaoTexto === "HORÁRIO LIVRE"){
        setBotaoTexto("HORÁRIO OCUPADO");
    }
    return novoBtnTxt;
}