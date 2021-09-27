import { reduxForm, Field } from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'Login'} placeholder={'Login'} />
            </div>
            <div>
                <Field component={'input'} name={'Password'} type={'password'} placeholder={'Password'} />
            </div>
            <div>
                <Field component={'input'} name={'RememberMe'} type={'checkbox'} />Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginReduxForm;