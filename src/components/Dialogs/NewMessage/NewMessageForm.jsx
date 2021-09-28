import { Form, Field } from "react-final-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { composeValidators, required, maxLenghtCreator } from "../../../utils/validators/validators";

const NewMessageForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field component={Textarea} name={'newMessage'} placeholder={'Enter your message'} validate={composeValidators(required, maxLenghtCreator(100))} />
                    </div>

                    <div>
                        <button className="btn new-message__btn">Отправить</button>
                    </div>
                </form>
            )}
        </Form>  
    )
}

export default NewMessageForm;