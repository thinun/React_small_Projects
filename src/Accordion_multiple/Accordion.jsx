import {useState} from 'react';
import Accordion_data from "./Accordion_data.js";
import './Accordion.css'
const Accordion = () => {
    const [selected, setSelected] = useState([]);
    const handleItemClick = (selectedID) => {
        if(selected.includes(selectedID)) {
            setSelected(selected.filter(id=>id!==selectedID))
        }
        else {
            setSelected([...selected,selectedID])
        }
    }
    return (
        <div className={"accordion"}>

            {Accordion_data.map((item) => (
                <>
                    <div className={"accordion-group"} key={item.id}>
                        <div className={"accordion-heading"}>
                            <h3>{item.question}</h3><span onClick={() => handleItemClick(item.id)}>+</span>
                        </div>
                        {selected.includes(item.id) && (
                            <div className={"accordion-data"}>
                                <p>{item.answer}</p>
                            </div>
                        )}

                    </div>
                </>
            ))}


        </div>


    );
};

export default Accordion;
