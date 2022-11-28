import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { productId } = useParams();
    const [ product, setProducts ] =useState({});

    useEffect(() => {
    (async () => {
        const response = await fetch(`https://fakestoreapi.com/products/ ${ productId }`)
        const result = await response.json();

        setProducts(result);

    })();
    }, [])
    return (
        <div>
            <h1>{ product.title}</h1>
            <img src={ product.image} alt={product.title} />
        </div>
    );
};

export default ProductPage;