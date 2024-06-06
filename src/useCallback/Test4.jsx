import React, {useCallback, useState} from 'react';
import Header from "../components/Header/Header.jsx";

const Test4 = () => {
    const [count, setCount] = useState(0);
    // also, when we're passing props to a mount, it will creat new function every time so to stop that we use callback hook
    //also whn using callback hook it will only render when there is a change in the function dependencies
    const newfunction = useCallback((count)=>{},[])

    
// here whenever we press the button click here the whole page gets rendered again, meaning Header also getting rendered
    // even though we didn't do any changes to the header, so to stop that we use useMemo hook for header.
    return (
        <div>
            <Header newfunction={newfunction}/>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(prevState => prevState+1)}}>Click Here</button>

        </div>
    );
};

export default Test4;
