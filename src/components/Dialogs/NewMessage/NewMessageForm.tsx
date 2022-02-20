import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { required, maxLenghtCreator } from "../../../utils/validators/validators";

const maxLenght100 = maxLenghtCreator(100);

export type NewMessageFormValuesType = {
    newMessage: string
}

type PropsType = {

}

const NewMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessage'} placeholder={'Enter your message'} validate={[required, maxLenght100]} />
            </div>

            <div>
                <button className="btn new-message__btn">Отправить</button>
            </div>
        </form>
    )
}

export default reduxForm<NewMessageFormValuesType>({
    form: 'dialogsNewMessage'
})(NewMessageForm);