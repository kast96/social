import { reduxForm, Field } from "redux-form";

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {/*<textarea ref={newMessageElement} className="new-message__input" name="new-message" onChange={onPostChange} value={props.newMessageText} />
            <button className="btn new-message__btn" onClick={onAddMessage}>Отправить</button>*/}
            <div>
                <Field component={'textarea'} name={'newMessage'} placeholder={'Login'} placeholder="Enter your message" />
            </div>

            <div>
                <button className="btn new-message__btn">Отправить</button>
            </div>
        </form>
    )
}

const NewMessageReduxForm = reduxForm({
    form: 'doalogsNewMessage'
})(NewMessageForm);

export default NewMessageReduxForm;