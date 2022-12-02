import React from 'react';
import HeaderComponent from "../../components/HeaderComponent";
import {clearBasket} from "../../store/basket/basketSlice";
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";


const ShoppingCart = () => {
    const dispatch = useDispatch();

    return (
        
        <div>
            <HeaderComponent/>
            <Button onClick={() => dispatch(clearBasket())}>Очистить корзину</Button>
            <h1>Ваша корзина пуста</h1>
        </div>
    );
};

export default ShoppingCart;