import { reduxForm, Field } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { required, maxLenghtCreator } from "../../../utils/validators/validators";

const maxLenght100 = maxLenghtCreator(100);

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessage'} placeholder={'Enter your message'} validate={[required, maxLenght100]} />
            </div>

            <div>
                <button className="btn new-message__btn">Отправить</button>
            </div>
        </form>
    )
}

const NewMessageReduxForm = reduxForm({
    form: 'dialogsNewMessage'
})(NewMessageForm);

export default NewMessageReduxForm;