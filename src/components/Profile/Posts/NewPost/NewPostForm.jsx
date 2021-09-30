import { reduxForm, Field } from "redux-form";
import { Textarea } from "../../../common/FormsControls/FormsControls";
import { required, maxLenghtCreator } from "../../../../utils/validators/validators";

const maxLenght10 = maxLenghtCreator(10);

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPost'} placeholder={'Enter post Text'} validate={[required, maxLenght10]} />
            </div>

            <div>
                <button className="btn new-post__btn">Отправить</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({
    form: 'profileNewPost'
})(NewPostForm);

export default NewPostReduxForm;