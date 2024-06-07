import { useEffect, useState } from 'react';
import './LoadMore.css';

const LoadMoreComponent = () => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async (skipCount) => {
            try {
                setLoading(true);
                const response = await fetch(`https://dummyjson.com/products?limit=9&skip=${skipCount}`);
                const result = await response.json();

                if (result.products.length > 0) {
                    setProducts(result.products);
                }
                setLoading(false);
            } catch (e) {
                console.log(e);
                setLoading(false);
            }
        };

        fetchData(count * 9);
    }, [count]);

    const loadMore = () => {
        setCount(count + 1);
    };

    return (
        <div className="container">
            {products && products.length > 0 ? products.map((product, index) => (
                <div key={index} className="product">
                    <div className="product__image">
                        <img src={product.images[0]} alt="Product Image" />
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                </div>
            )) : null}
            {loading ? <div>Loading...</div> : <button onClick={loadMore}>Load More</button>}
        </div>
    );
};

export default LoadMoreComponent;
