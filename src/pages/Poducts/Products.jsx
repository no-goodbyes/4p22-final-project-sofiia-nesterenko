import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderComponent from "../../components/HeaderComponent";
import {Card, Container} from "react-bootstrap";
import './Products.css';



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
        <div className="d-flex flex-column">
            <HeaderComponent/>
    <Container className="d-flex justify-content-center">
            <Card className="product-page__card">
                <Card.Img variant="top" src={product.image} className="product-page__card-image"/>
                <Card.Body>
                    <Card.Title >{product.title}</Card.Title>
                    <Card.Text>
                        <p>{product.description}</p>
                        <h3 >$ {product.price}</h3>
                    </Card.Text>
                    <button className="product-page__button">Купить</button>
                </Card.Body>
            </Card>
        </Container>
        </div>
    );
};

export default ProductPage;