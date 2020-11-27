import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {setAuthFromLogin, setAuth } from '../../redux/auth_reducer';
import YELLOW_BAR from '../Global_components/Yellow_bar/YellowBar';
import { required } from '../validators/validators';
import _css from './Login.module.css'
import { InputEmail, InputPass } from './LoginForms/LoginForms';



const LoginForm = (props) => {

    return <form className={_css.form} onSubmit={props.handleSubmit}>
        {props.error && <div className={_css.error}><span>{props.error}</span></div>}
        <div className={_css.for_input_email}>
        <Field className="input" name={"email"} component={InputEmail} textSpan={"E-mail:"} what={"email"} validate={[required]}/>
        </div>
        <div className={_css.for_input_pass}>
        <Field className="input" name={"password"} component={InputPass} textSpan={"Пароль:"} validate={[required]} type={'password'}/>
        </div>
        <div className={_css.checkbox}>
        <div className={_css.remember}><Field type={"checkbox"}  name={"rememberMe"}  component={"input"} /> <span>Запомнить меня</span></div>
        </div>
        <div className={_css.buttons}>
            <div className={_css.enter_register_div}>
            <button className={_css.enter}>Вход</button>
            <button className={_css.register}>Регистрация</button></div>
        </div>
            
    </form>

}


const LoginContainer = (props) => {

    const onSubmit = (formData) => {
    props.setAuthFromLogin(formData.email, formData.password, formData.rememberMe)
    // console.log(formData);
  
    }

    if(props.isAuth){
        return <Redirect to="/profile"/>
    }

    return <div className={_css.wrapper_login}>
        <YELLOW_BAR text={"Вход"} />
        <div className={_css.wrapper_for_RdxFrm}>
        <LoginReduxForm onSubmit={onSubmit} />
        </div>
        </div>

}

const LoginReduxForm = reduxForm({ form: 'loginForm' })(LoginForm)

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,

})

export default connect(mapStateToProps, {setAuthFromLogin, setAuth})(LoginContainer);