import React from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket } from "../store/basket/basketSlice";
const Card = ({ title, image, price, description, id }) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.basket);

    const onBuyClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(addToBasket(id));
    };

    const onDeleteClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(removeFromBasket(id));
    };

    return (
        <Link to={`products/${id}`} className="card scale">
            <div className="card-info">
                <img className="card-image" src={image} alt={title} />

                <h2 className="card-heading">{title}</h2>
                <p className="card-description">{description}</p>
                <div className="d-flex flex-row justify-content-between">
                    <h3 className="card-price">{price} $</h3>
                    {!products[id] && (
                        <button onClick={onBuyClick} className="card-button">
                            Купить
                        </button>
                    )}
                    {products[id] && (
                        <>
                            <button onClick={onDeleteClick} className="card-button-bought">
                                -
                            </button>
                            <button className="card-button card-button-small" disabled>
                                {products[id]}
                            </button>
                            <button onClick={onBuyClick} className="card-button-bought">
                                +
                            </button>
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default Card;
