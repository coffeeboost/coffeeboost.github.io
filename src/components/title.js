import React from 'react';
import '../styles/mystyle.css'

export default function Title(props) {
    return (
        <h1 className={props.accent == 'red' ? "red" : "blue"}>{props.title}</h1>
    )
}