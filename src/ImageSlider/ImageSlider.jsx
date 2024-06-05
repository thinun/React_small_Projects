import React, { useEffect, useState } from 'react';

const ImageSlider = () => {
    const [imgURL, setImgURL] = useState('');
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [number, setNumber] = useState(num[-1]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                let response = await fetch(`https://loremflickr.com/320/240?lock=${number}`);
                let imgUrl = response.url;
                setImgURL(imgUrl);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [number]);

    // next
    const handleClickNext = () => {
        let newIndex = (currentIndex + 1) % num.length;
        setCurrentIndex(newIndex);
        setNumber(num[newIndex]);
    };
    // previous
    const handleClickPrevious = () => {
        let newIndex = (currentIndex - 1) % num.length;
        setCurrentIndex(newIndex);
        setNumber(num[newIndex]);
    };

    return (
        <div>
            <button onClick={handleClickPrevious}>Previous</button>
            {imgURL ? <img src={imgURL} alt="Random Image"/> : <p>Loading...</p>}
            <button onClick={handleClickNext}>Next</button>

        </div>
    );
};

export default ImageSlider;
