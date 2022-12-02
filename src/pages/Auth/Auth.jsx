import React, {useEffect, useState} from "react";
import "./Auth.css";
import {Container} from "react-bootstrap";
const Auth = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Поле обязательно для заполнения');
  const [passwordError, setPasswordError] = useState('Поле обязательно для заполнения');
  const [nameError, setNameError] = useState('Поле обязательно для заполнения');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if(emailError || passwordError || nameError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError, nameError])

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Email введён некорректно')
    } else {
      setEmailError('')
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if(e.target.value.length < 8) {
      setPasswordError('Пароль должен содержать не менее 8 символов')
      if(!e.target.value) {
        setPasswordError('Поле обязательно для заполнения')
      }
    } else {
      setPasswordError('')
    }
  }

  const nameHandler = (e) => {
    setName(e.target.value)
    if(e.target.value.length < 2) {
      setNameError('Имя должно содержать не менее 1 символа')
      if(!e.target.value) {
        setNameError('Поле обязательно для заполнения')
      }
    } else {
      setNameError('')
    }
  }


  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
      case 'name':
        setNameDirty(true)
            break
    }
  }

  
  return (

      <Container className="d-flex justify-content-center align-items-center">
        <div className="reg-form">
          <h1 className="reg-form__heading">Регистрация</h1>
          <form className="reg-form__form" noValidate>
            <label className="reg-form__label required" htmlFor="name">
              Имя
              {(nameDirty && nameError) && <span style={{color: 'red', float: 'right'}}>{nameError}</span>}
            </label>
            <input
                className="reg-form__input confirmation"
                id="name"
                type="text"
                name="name"
                placeholder="Введите имя"
                onBlur={e=> blurHandler(e)}
                value={name}
                onChange={e => nameHandler(e)}
            />

            <label className="reg-form__label" htmlFor="email">
              Email
              {(emailDirty && emailError) && <span style={{color: 'red', float: 'right'}}>{emailError}</span>}
            </label>
            <input
              className="reg-form__input email"
              id="email"
              type="email"
              name="email"
              placeholder="Введите email"
              onBlur={e=> blurHandler(e)}
              value={email}
              onChange={e => emailHandler(e)}
            />
            <label className="reg-form__label" htmlFor="password">Password
              {(passwordDirty && passwordError) && <span style={{color: 'red', float: 'right'}}>{passwordError}</span>}
            </label>
            <input
              className="reg-form__input password"
              id="password"
              type="password"
              name="password"
              placeholder="Введите пароль"
              onBlur={e=> blurHandler(e)}
              value={password}
              onChange={e => passwordHandler(e)}
            />
            <div className="reg-form__radio">
              <legend className="radio__legend">Пол</legend>
              <div className="radio__man">
                <input
                  className="radio__man-input"
                  type="radio"
                  name="sex"
                  id="man"
                  value="MAN"
                />
                <label className="radio__man-label" htmlFor="man">
                  Мужчина
                </label>
              </div>
              <div className="radio__woman">
                <input
                  className="radio__woman-input"
                  type="radio"
                  name="sex"
                  id="woman"
                  value="WOMAN"
                />
                <label className="radio__woman-label" htmlFor="woman">
                  Женщина
                </label>
              </div>
            </div>
            <div className="reg-form__textarea-comment">
              <span className="textarea-comment__span">О себе</span>
              <textarea
                className="textarea-comment__textarea"
                name="comment"
                id="comment"
                placeholder="Расскажите о себе..."
              ></textarea>
            </div>
            <div className="reg-form__checkbox ">
              <input
                className="checkbox__input-checkbox"
                type="checkbox"
                id="checkbox"
                name="checkbox"
                value="TRUE"
              />
              <label className="checkbox__label-checkbox" htmlFor="checkbox">
                Я согласен получать обновления на почту
              </label>
            </div>

            <button disabled={!formValid}  className="reg-form__button" id="reg-button">
              Регистрация
            </button>
          </form>
        </div>
      </Container>
  );
};

export default Auth;
