import {useState,useMemo} from 'react';

const Test3 = () => {
    const [num, setNum] = useState(0);

    function calculateCube(num) {
        return Math.pow(num, 3)
    }

    // if we didn't use Memo Hook calculateCube function will execute everytime the page renders, but now it will execute
    // only when the num state is changes
    const result = useMemo(() => calculateCube(num), [num]);

    return (
        <div>
            <input type={"number"} onChange={(event)=>{setNum(event.target.value)}}/>
            <h3>Cube of {num} is {result}</h3>

        </div>
    );
};

export default Test3;
