import {useState} from 'react';

const useTheam = () => {
    const [darkMode, setDarkMode] = useState(false);

    const setDarkMode = () => {
        setDarkMode((prevState) => !prevState)
    }

    return [darkMode, setDarkMode];

}

const Practice = () => {
    const [darkMode, setDarkMode] = useTheam();

    return (
        <div>

        </div>
    );
};

export default Practice;
