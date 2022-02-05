import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import styles from '../common/FormsControls/FormsControls.module.scss';

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input} name={'email'} placeholder={'Email'} validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={'password'} type={'password'} placeholder={'Password'} validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'} />Remember me
            </div>
            {captchaUrl && 
                <img src={captchaUrl} alt={'Captcha'} />
            }
            {captchaUrl && 
                <Field component={Input} name={'captcha'} placeholder={'Symbols from captcha'} validate={[required]} />
            }
            {error &&
                <div className={styles.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form: 'login'
})(LoginForm);

export default LoginReduxForm;