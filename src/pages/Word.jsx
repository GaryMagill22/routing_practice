import React from 'react'
import { useParams } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router-dom";





const Word = () => {
    const { str } = useParams();

    return (
        <div>
            <h1 style={{ color: "pink" }}>Your word is: <span>{str}</span> </h1>
        </div>
    )
}

export default Word

