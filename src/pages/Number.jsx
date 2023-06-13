import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router";



const Number = () => {
    const { num = "22" } = useParams();


    return (
        <div>
            <h1>Number</h1>
            <h2 style={{ color: "blue" }}>Your number is: <span>{num}</span> </h2>

        </div>
    )
}

export default Number

