import { reduxForm, Field } from "redux-form";

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPost'} placeholder={'Enter post Text'} />
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