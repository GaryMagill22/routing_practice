import { useParams } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";




const Landing = (props) => {
    const [favNumber, setFaveNumber] = useState('')
    const [favNumberErr, setFavNumberErr] = useState()
    const [favWordErr, setFavWordErr] = useState()
    const navigate = useNavigate()
    const [favWord, setFavWord] = useState();



    // handles change for Word
    const changeWordHandler = (e) => {
        setFavWord(e.target.value)
    }

    // Handles change for Number
    const changeHandler = (e) => {
        setFaveNumber(e.target.value)
    };

    // Handles submitting number
    const numberHandler = (e) => {
        e.preventDefault();
        if (isNaN(favNumber)) {
            setFavNumberErr('Needs to be a number!')
        } else {
            setFaveNumber('')
            navigate(`/number/${favNumber}`)
        }
    };

    // Handles submitting word
    const wordHandler = (e) => {
        e.preventDefault();
        if (favWord.length <= 2) {
            setFavWordErr("Word needs to be atleast 2 characters long!")
        } else if (isNaN(favWord)) {
            setFavWordErr("Needs to be a word!")
            setFavWord('')
            navigate(`/word/${favWord}`)
        }

    };

    return (
        <div>
            <h1>Welcome to the Landing Page!</h1>
            <form onSubmit={numberHandler}>
                <div>
                    <label htmlFor="favNumber">What is your favorite number:</label>
                    <input type="text" name="number" value={favNumber} onChange={changeHandler} />
                    {
                        favNumberErr &&
                        <p style={{ color: "red" }}>{favNumberErr}</p>
                    }
                </div>
                <div>
                    <button>Route</button>
                </div>
            </form>
            <form onSubmit={wordHandler}>
                <div>
                    <label htmlFor="favWord">What is your favorite word:</label>
                    <input type="text" name="word" value={favWord} onChange={changeWordHandler} />
                    {
                        favWordErr &&
                        <p style={{ color: "red" }} >{favWordErr}</p>
                    }
                </div>
                <div>
                    <button>Route</button>
                </div>
            </form>
        </div>
    )
};


export default Landing