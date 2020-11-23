import React from 'react';
import { Field, reduxForm } from 'redux-form';


const LoginForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
        <Field placeholder={"login"} name={"login"} component={"input"} />
        </div>
        <div>
        <Field placeholder={"password"} name={"password"} component={"input"} />
        </div>
        <div>
        <Field type={"checkbox"} name={"rememberMe"}  component={"input"} /> remeber me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>

}


const LoginContainer = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>Login
    <LoginReduxForm onSubmit={onSubmit}/>
</div>
}

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm)

export default LoginContainer;