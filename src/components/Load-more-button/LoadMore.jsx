import {useEffect, useState} from 'react';
import './LoadMore.css';

const LoadMore = () => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async (skipCount) => {
            try {
                setLoading(true);
                const response = await fetch(`https://dummyjson.com/products?limit=9&skip=${skipCount}`);
                const result = await response.json();

                if (result && result.products && result.products.length) {
                    setProducts(prevState => [...prevState, ...result.products]);
                }
                setLoading(false);
            } catch (e) {
                console.log(e);
                setLoading(false);
            }
        };
        fetchData(count * 9);

    }, [count]);

    const handleLoadMore = () => {
        setCount(count + 1);
    };

    return (
        <div className="LoadMoreComponent">
            <div className="container">
                {products && products.length > 0 ? products.map((product, index) => (
                    <div key={product.id} className="product">
                        <img src={product.images[0]} alt="Product Image"/>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                )) : null}
            </div>
            {loading ? <div className={"loading"}>Loading...</div> :
                <button onClick={handleLoadMore}>Load More</button>}
        </div>
    );
};

export default LoadMore;
