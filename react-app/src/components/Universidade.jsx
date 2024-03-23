import React from 'react';
import { getPerson, rng } from '../utils/myUtils.mjs';

function UniversidadeView() {
    // Lógica específica para a visualização da instituição, se necessário

    return (
        <div>
            <h1>{`${getPerson().firstName}`}</h1>            
        </div>
    );
}

export default UniversidadeView;
