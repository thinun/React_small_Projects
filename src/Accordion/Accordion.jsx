import React, {useState} from 'react';
import Accordion_data from "../assets/Accordion_data.js";
import './Accordion.css'
const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const handleItemClick = (selectedID) => {
        setSelected(selectedID === selected ? null : selectedID)
        console.log(selected)
    }
    return (
        <div className={"accordion"}>

            {Accordion_data.map((item, index) => (
                <>
                    <div className={"accordion-group"} key={item.id}>
                        <div className={"accordion-heading"}>
                            <h3>{item.question}</h3><span onClick={() => handleItemClick(item.id)}>+</span>
                        </div>
                        {item.id === selected && (
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
