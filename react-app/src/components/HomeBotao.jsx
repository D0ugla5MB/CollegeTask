import React from 'react';
import { Link } from 'react-router-dom';

export function BotaoHome() {
    return (
        <button type="button">
            <Link to="/">Home</Link>
        </button>
    );
}

