import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import {ReactComponent as ButtonImgBasket} from "../assets/img/Basket.svg"

const Header = () => {
  return (
    <header className="Header">
      <Link className="HeaderLogo" to="/">
        <Logo />
      </Link>
      <div className="HeaderMenu">
        <Link className="HeaderLoginButton" to="/">
          Товары
        </Link>
        <Link to="/shoppingCart" className="HeaderLoginButton HeaderLoginButtonSize">
          <ButtonImgBasket className="HeaderShopBasketButtonImg" />
        </Link>
        <Link className="HeaderLoginButton" to="/login">
          Вход
        </Link>
        <Link className="HeaderLoginButton" to="/auth">
          Регистрация
        </Link>
      </div>
    </header>
  );
};

export default Header;
