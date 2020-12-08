import React from 'react';
import _css from './RegistrationForms.module.css';

export const InputEmail = ({ input, meta, ...props }) => {
  return (
    <div className={_css.wrapper_input}>
      <div className={_css.input_form}>
        <span className={_css.email_span}>{props.textSpan}</span>
        <input {...input} {...props} />
      </div>
      {meta.error && meta.touched && (
        <div className={_css.error}>
          <span>Это поле обязательно к заполнению.</span>
        </div>
      )}
    </div>
  );
};

export const InputPass = ({ input, meta, ...props }) => {
  return (
    <div className={_css.wrapper_input}>
      <div className={_css.input_form}>
        <span className={_css.pass_span}>{props.textSpan}</span>
        <input {...input} {...props} />
      </div>
      {meta.error && meta.touched && (
        <div className={_css.error}>
          <span>Это поле обязательно к заполнению.</span>
        </div>
      )}
    </div>
  );
};
