import React from "react";
import Header from "../../layouts/Header";
import '../../styles/Auth.css';
const Auth = () => {
  return (
    <div>
      <main>
        <div class="reg-form">
          <h1 class="reg-form__heading">Регистрация</h1>
          <form class="reg-form__form">
            <label class="reg-form__label" for="email">
              Email
            </label>
            <input
              class="reg-form__input"
              id="email"
              type="email"
              name="email"
              placeholder="Введите email"
            />
            <label class="reg-form__label" for="password">
              Пароль
            </label>
            <input
              class="reg-form__input"
              id="password"
              type="password"
              name="password"
              placeholder="Введите пароль"
            />
            <label class="reg-form__label" for="confirmation">
              Подтверждение пароля
            </label>
            <input
              class="reg-form__input"
              id="confirmation"
              type="password"
              name="confirmation"
              placeholder="Подтвердите пароль"
            />

            <div class="reg-form__radio">
              <legend class="radio__legend">Пол</legend>
              <div class="radio__man">
                <input
                  class="radio__man-input"
                  type="radio"
                  name="sex"
                  id="man"
                  value="MAN"
                />
                <label class="radio__man-label" for="man">
                  Мужчина
                </label>
              </div>
              <div class="radio__woman">
                <input
                  class="radio__woman-input"
                  type="radio"
                  name="sex"
                  id="woman"
                  value="WOMAN"
                />
                <label class="radio__woman-label" for="woman">
                  Женщина
                </label>
              </div>
            </div>
            <div class="reg-form__textarea-comment">
              <span class="textarea-comment__span">О себе</span>
              <textarea
                class="textarea-comment__textarea"
                name="comment"
                id="comment"
                contenteditable="false"
                placeholder="Расскажите о себе..."
              ></textarea>
            </div>
            <div class="reg-form__checkbox">
              <input
                class="checkbox__input-checkbox"
                type="checkbox"
                id="checkbox"
                name="checkbox"
                value="TRUE"
              />
              <label class="checkbox__label-checkbox" for="checkbox">
                Я согласен получать обновления на почту
              </label>
            </div>

            <button class="reg-form__button">Регистрация</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Auth;
