import React from 'react'
import { Link } from 'react-router-dom';

export default function HomeNav() {
    return (
        <>
            <div>
                <nav>
                    <button type="button">
                        <Link to={"universidade"}>Universidade</Link>
                    </button>
                    <button type="button">
                        <Link to={"aluno"}>Aluno</Link>
                    </button>
                    <button type="button">
                        <Link to={"professor"}>Professor</Link>
                    </button>
                </nav>
            </div>
        </>
    );
}