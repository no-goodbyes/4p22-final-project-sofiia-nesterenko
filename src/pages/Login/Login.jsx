import React, {useEffect, useState} from "react";
import './Login.css';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Поле обязательно для заполнения');
  const [passwordError, setPasswordError] = useState('Поле обязательно для заполнения');
  const  [formValid, setFormValid] = useState(false)

  useEffect(() => {
      if(emailError || passwordError) {
          setFormValid(false)
      } else {
        setFormValid(true)
      }
  }, [emailError, passwordError])

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

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <main>
        <div className="entry-form">
          <h1 className="entry-form__heading">Вход</h1>
          <form className="entry-form__form" noValidate>
            <label className="entry-form__label" htmlFor="email">
              Email
              {(emailDirty && emailError) && <span style={{color: 'red', float: 'right'}}>{emailError}</span>}
            </label>
            <input
              className="entry-form__input"
              id="email"
              type="email"
              name="email"
              placeholder="Введите email"
              onBlur={e=> blurHandler(e)}
              value={email}
              onChange={e => emailHandler(e)}
            />
            <label className="entry-form__label" htmlFor="password">
              Пароль
              {(passwordDirty && passwordError) && <span style={{color: 'red', float: 'right'}}>{passwordError}</span>}
            </label>
            <input
              className="entry-form__input"
              id="password"
              type="password"
              name="password"
              placeholder="Введите пароль"
              onBlur={e=> blurHandler(e)}
              value={password}
              onChange={e => passwordHandler(e)}
            />
            <button disabled={!formValid} className="entry-form__button">Войти</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
