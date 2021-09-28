import { Form, Field } from "react-final-form";
import { Textarea } from "../../../common/FormsControls/FormsControls";
import { composeValidators, required, maxLenghtCreator } from "../../../../utils/validators/validators";

const NewPostForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
           {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field component={Textarea} name={'newPost'} placeholder={'Enter post Text'} validate={composeValidators(required, maxLenghtCreator(10))} />
                </div>

                <div>
                    <button className="btn new-post__btn">Отправить</button>
                </div>
            </form>
            )}
        </Form>  
    )
}

export default NewPostForm;