import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import { clearBasket } from "../../store/basket/basketSlice";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import "./ShoppingCart.css";
import "../../styles/CardContainer.css";

const ShoppingCart = () => {
    const products = useSelector((state) => state.products.entities);
    const basket = useSelector((state) => state.basket);

    const dispatch = useDispatch();

    return (
        <div>
            <HeaderComponent />
            <Container className="d-flex flex-column mt-5 justify-content-center">
                <Container className=" shopping-cart__products d-flex card-container">
                    {products
                        .filter((product) => basket[product.id])
                        .map((item, index) => {
                            return (
                                <Card
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                    price={item.price}
                                    id={item.id}
                                />
                            );
                        })}
                </Container>
                <Container className="d-flex flex-row shopping-cart__button-price-container">
                    <div className="shopping-cart__button-container">
                        <Button
                            onClick={() => dispatch(clearBasket())}
                            className="shopping-cart__button"
                        >
                            Очистить корзину
                        </Button>
                        <Button className="shopping-cart__button">Оформить заказ</Button>
                    </div>
                    <div className="shopping-cart__total-price">
                        <span>Общая сумма: </span>
                        {products.reduce((acc, product) => {
                            if (basket[product.id]) {
                                acc += product.price * basket[product.id];
                            }
                            return acc;
                        }, 0)}
                    </div>
                </Container>
            </Container>
        </div>
    );
};

export default ShoppingCart;
