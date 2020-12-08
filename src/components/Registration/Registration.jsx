import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { CreateNewUser } from '../../redux/auth_reducer';
import YellowBar from '../Global_components/YellowBar/YellowBar';
import { required } from '../validators/validators';
import _css from './Registration.module.css';
import {
  InputEmail,
  InputPass,
} from './RegistrationForms/RegistrationForms';

const RegistrationForm = (props) => {
  return (
    <form className={_css.form} onSubmit={props.handleSubmit}>
      {props.error && (
        <div className={_css.error}>
          <span>{props.error}</span>
        </div>
      )}
      <div className={_css.for_input_email}>
        <Field
          className="input"
          name={'email'}
          component={InputEmail}
          textSpan={'E-mail:'}
          what={'email'}
          validate={[required]}
        />
      </div>
      <div className={_css.for_input_pass}>
        <Field
          className="input"
          name={'password'}
          component={InputPass}
          textSpan={'Пароль:'}
          validate={[required]}
          type={'password'}
        />
      </div>
      <div className={_css.for_input_pass}>
        <Field
          className="input"
          name={'name'}
          component={InputPass}
          textSpan={'Имя:'}
          validate={[required]}
        />
      </div>
      <div className={_css.for_input_pass}>
        <Field
          className="input"
          name={'surname'}
          component={InputPass}
          textSpan={'Фамилия:'}
          validate={[required]}
        />
      </div>
      <div className={_css.buttons}>
        <div className={_css.enter_register_div}>
          <button type="submit" className={_css.register}>
            Регистрация
          </button>
        </div>
      </div>
    </form>
  );
};

const RegistrationContainer = (props) => {
  const onSubmit = (formData) => {
    props.CreateNewUser(
      formData.email,
      formData.password,
      formData.name,
      formData.surname,
    );
    // console.log(formData);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div className={_css.wrapper_login}>
      <YellowBar text={'Вход'} />
      <div className={_css.wrapper_for_RdxFrm}>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: 'RegistrationForm' })(
  RegistrationForm,
);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  CreateNewUser,
})(RegistrationContainer);
