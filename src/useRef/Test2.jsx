import {useRef} from 'react';

const Test2 = () => {
    const userInput=useRef(null);

    const handleBtnClick =()=>{
        // we can use the useRef hook to access DOM elements and change them
        userInput.current.style.backgroundColor="red"
    }

    return (
        <div>
            <input type={"text"} ref={userInput}/>
            <button type={"submit"} onClick={handleBtnClick}>Submit</button>

        </div>
    );
};

export default Test2;
