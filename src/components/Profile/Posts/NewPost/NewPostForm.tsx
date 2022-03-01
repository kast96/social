import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { Textarea } from "../../../common/FormsControls/FormsControls";
import { required, maxLenghtCreator } from "../../../../utils/validators/validators";

const maxLenght10 = maxLenghtCreator(10);

export type NewPostFormValuesType = {
    newPost: string
}

type NewPostFormOwnProps = {
}

const NewPostForm: React.FC<InjectedFormProps<NewPostFormValuesType, NewPostFormOwnProps> & NewPostFormOwnProps> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPost'} placeholder={'Enter post Text'} validate={[required, maxLenght10]} />
            </div>

            <div>
                <button className="btn new-post__btn">Отправить</button>
            </div>
        </form>
    )
}

export default reduxForm<NewPostFormValuesType, NewPostFormOwnProps>({
    form: 'profileNewPost'
})(NewPostForm);