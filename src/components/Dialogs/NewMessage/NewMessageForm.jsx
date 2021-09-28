import { reduxForm, Field } from "redux-form";

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessage'} placeholder={'Enter your message'} />
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