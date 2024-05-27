import './Random_colour.css'
import {useState} from 'react'

const Random_colour = () => {
    const [colour, setColour] = useState('#ffffff')
    const randomColor = () => {
        const min = 100
        const max = 999
        const color = `#${Math.floor(Math.random() * (max - min)) + min}`
        setColour(color)
    }
    return (
        <>
            <div className="random_colour" style={{backgroundColor: colour}}>
                <h1>{colour}</h1>
            </div>
            <button onClick={randomColor}>Colour</button>
        </>
    )
        ;
};

export default Random_colour;
