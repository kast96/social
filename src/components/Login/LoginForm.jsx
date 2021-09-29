import { Form, Field } from "react-final-form";
import { Input } from "../common/FormsControls/FormsControls";
import { composeValidators, required } from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field component={Input} name={'email'} placeholder={'Email'} validate={composeValidators(required)} />
                    </div>
                    <div>
                        <Field component={Input} name={'password'} type={'password'} placeholder={'Password'} validate={composeValidators(required)} />
                    </div>
                    <div>
                        <Field component={Input} name={'rememberMe'} type={'checkbox'} />Remember me
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            )}
        </Form>  
    )
}

export default LoginForm;