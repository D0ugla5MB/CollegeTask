import React, { useState } from 'react';
import { createPortal } from 'react-dom';

export function Popup({ cursoNome, ind }) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button key={ind} onClick={togglePopup}>{cursoNome}</button>
            {
                createPortal(
                     isOpen && (
                        <>
                            <div >
                                <h2>Coisas do curso</h2>
                                <button onClick={togglePopup}>Close</button>
                            </div>
                        </>
                    )
                )
            }
        </>
    );
}


