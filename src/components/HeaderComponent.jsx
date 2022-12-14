import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import '../styles/HeaderComponent.css';
import '../styles/ShoppingCartIcon.css';
import { ReactComponent as Basket } from "../assets/img/cart.svg";


const HeaderComponent = () => {
    const basket = useSelector((state) => state.basket);



    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand><Link to={'/'}>CoolShop</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>

                        <Nav.Link><Link to={'/shoppingCart'} className="header__shopping-cart" >
                            <Basket className="shopping-cart-icon" />
                            {Object.values(basket).length > 0 && <span className="shopping-cart-item" >{Object.values(basket).reduce((acc, item) => {
                                acc += item;

                                return acc;
                            }, 0)}</span>}
                        </Link></Nav.Link>
                        <Nav.Link><Link to={'/login'}>Log in</Link></Nav.Link>
                        <Nav.Link><Link to={'/auth'}>Registration</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderComponent;