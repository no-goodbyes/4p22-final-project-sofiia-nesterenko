import React from 'react';
import Button from './Button';
import '../styles/Card.css';
import { Link } from 'react-router-dom';

const Card = ({title, image, price, description, id}) => {
    return (
        
        <Link to={`products/${id}`} className='Card'>
            <div className='CardInfo'>
            <img className='CardImage' src={image} alt={title} />
            
                <h2 className='CardTitle'>{title}</h2> 
                <p className='CardDescription'>{description}</p>
                <h3 className='CardPrice'>{price} $</h3> 
                <button className='CardButton'>Купить</button>
            </div>
        </Link>
    );
};

export default Card;