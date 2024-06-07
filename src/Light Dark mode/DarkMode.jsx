import React from "react";
import './DarkMode.css'

const DarkMode = () => {
    const [toogle, setToogle] = React.useState(false);

    const handleToggle = () => {
        setToogle((prevState) => !prevState);
    };

    return (
        <div className={`${toogle ? "dark" : "light"}`}>
            <div className="container">
                <h1 className="text">Hello, Tailwind CSS!</h1>
            </div>
            <button className={`${toogle?'darkButton':'lightButton'}`} onClick={handleToggle}>
                {toogle ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
};

export default DarkMode;
