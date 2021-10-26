import { reduxForm, Field } from "redux-form";
import { Input, Textarea } from "../../common/FormsControls/FormsControls";
import { required, maxLenghtCreator } from "../../../utils/validators/validators";

const maxLenght100 = maxLenghtCreator(100);

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>Full name:</div>
        <Field component={Input} name={'fullName'} placeholder={'Full name'} validate={[required, maxLenght100]} />
      </div>
      <div>
        <div>Looking for a job:</div>
        <Field component={Input} name={'lookingForAJob'} placeholder={'Looking for a job'} type="checkbox" />
      </div>
      <div>
        <div>Looking for a job description:</div>
        <Field component={Textarea} name={'lookingForAJobDescription'} placeholder={'Looking for a job description'} validate={[maxLenght100]} />
      </div>
      <div>
        <div>About me:</div>
        <Field component={Textarea} name={'aboutMe'} placeholder={'About me'} validate={[maxLenght100]} />
      </div>
      <div>
        <div>Contacts:</div>
        {Object.keys(profile.contacts).map(key => {
          return (
            <div key={key}>
              <b>{key}</b>
              <Field component={Input} name={'contacts.'+key} placeholder={key} validate={[maxLenght100]} />
            </div>
          )
        })}
      </div>
      {error &&
        <div>
          {error}
        </div>
      }
      <div>
          <button className="btn">Отправить</button>
      </div>
    </form>
  )
}

const ProfileDataReduxForm = reduxForm({
  form: 'profileData'
})(ProfileDataForm);

export default ProfileDataReduxForm;
