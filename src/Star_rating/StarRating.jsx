 import './StarRating.css';
import {FaStar} from 'react-icons/fa';
import {useState} from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [star, setStar] = useState(0);

    const handleRatingChange = (index) => {
        setRating(index+1);
    };

    const handleMouseIn = (index) => {
         setStar(index+1);
    }
    const handleMouseOut = () => {
       setStar(0)
    }

    return (
        <div className="star-rating">
            {
                [...Array(5)].map((_, index) => {
                    return (
                        <FaStar key={index} onClick={() => handleRatingChange(index)}
                                className={index < (rating||star) ? 'active-star' : 'star'}
                                onMouseEnter={() => handleMouseIn(index)}
                                onMouseLeave={handleMouseOut}
                        />
                    );
                })
            }
        </div>
    );
};

export default StarRating;
