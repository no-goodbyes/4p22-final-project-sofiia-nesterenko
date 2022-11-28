import React from 'react';
import '../styles/Card-container.css';
import { useEffect, useState } from 'react';
import Card from './Card';

const CardContainer = () => {
    const [products, setProducts] = useState([]);
   
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((result) => {
          setProducts(result);
        })
      }, []);

    return (
        <div className='Card-container'>
            {products.map((item, index) => {
        return <Card  key={index}
                      title ={item.title}
                      description={item.description}
                      image={item.image}
                      price={item.price}
                      id={item.id}/>
                    })
    }
        </div>
    );
};

export default CardContainer;