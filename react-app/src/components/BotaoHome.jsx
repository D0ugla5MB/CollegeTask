import React from 'react'
import { Link } from 'react-router-dom'

export default function BotaoHome(){
    return <Link to={"/"}><button>Home</button></Link>;
}