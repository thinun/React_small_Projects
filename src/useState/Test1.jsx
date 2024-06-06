import React, {useState} from 'react';

const Test = () => {
    const [count, setCount] = useState(0);

    const handleButtonIncrease = () => {
        setCount((prevCount)=>{
            return prevCount + 1;
        })
    }
     const handleButtonDecrease = () => {
        setCount((prevCount)=>{
            return prevCount - 1;
        })
    }

    return (
        <div>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <button onClick={handleButtonIncrease}>Increase</button>
            <button onClick={handleButtonDecrease}>Decrease</button>
        </div>
    );
};

export default Test;
