import {useEffect, useState} from 'react';

const Test = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 2000)
    }, [count]); // whenever the count variable changes useEffect will change the =

    return (
        <div>
            <h1>I have rendered {count} times!!</h1>

        </div>
    );
};

export default Test;
