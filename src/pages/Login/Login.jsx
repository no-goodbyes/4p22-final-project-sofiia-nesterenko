import React from "react";
import Header from "../../layouts/Header";
import '../../styles/Login.css';
import Button from "../../components/Button";

const Login = () => {
  return (
    <div>
      <main>
        <div class="entry-form">
          <h1 class="entry-form__heading">Вход</h1>
          <form class="entry-form__form">
            <label class="entry-form__label" for="email">
              Email
            </label>
            <input
              class="entry-form__input"
              id="email"
              type="email"
              name="email"
              placeholder="Введите email"
            />
            <label class="entry-form__label" for="password">
              Пароль
            </label>
            <input
              class="entry-form__input"
              id="password"
              type="password"
              name="password"
              placeholder="Введите пароль"
            />
            <Button text="Войти"/>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
