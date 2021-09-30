import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'email'} placeholder={'Email'} validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={'password'} type={'password'} placeholder={'Password'} validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'} />Remember me
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