import LoginReduxForm from "./LoginForm";
import { Redirect } from 'react-router-dom';
import { LoginFormValuesType } from './LoginForm';

type ProperType = {
    isAuth: boolean
    captchaUrl: string | null
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const Login: React.FC<ProperType> = ({isAuth, captchaUrl, login}) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (isAuth) {
        return (
            <Redirect to={'/profile/'} />
        )
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>
    )
}

export default Login;