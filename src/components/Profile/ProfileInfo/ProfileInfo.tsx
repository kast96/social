import { ChangeEvent, useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import UserPhoto from "../../common/UserPhoto/UserPhoto";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from './ProfileDataForm';
import { ContactsType, ProfileType } from "../../../types/types";

type PropsType = {
  profile: ProfileType | null
  status: string
  isOwner: boolean
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = ({profile, status, isOwner, updateStatus, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const inMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const updateProfile = (formData: ProfileType) => {
    const promise = saveProfile(formData);
    promise.then(() => {
      setEditMode(false);
    });
  }

  return (
    <div className="profile-info">
      <div className="profile__avatar">
        <UserPhoto photo={profile.photos.large} alt={profile.fullName} />
        {isOwner && <input type={'file'} onChange={inMainPhotoSelected} />}
      </div>

      {editMode
        ? <ProfileDataForm onSubmit={updateProfile} profile={profile} initialValues={profile} />
        : <ProfileData profile={profile} isOwner={isOwner} activeEditMode={() => setEditMode(true)} />}

      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <div className="profile__description">description</div>
    </div>
  );
}

type ProfileDataPropsType = {
  profile: ProfileType
  isOwner: boolean
  activeEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, activeEditMode}) => {
  return (
    <div>
      {isOwner &&
        <div>
          <button onClick={activeEditMode}>Edit</button>
        </div>
      }
      <div>
        <b>Full name: </b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob &&
        <div>
          <b>My professional skills: </b> {profile.lookingForAJobDescription}
        </div>
      }
      <div>
        <b>About me: </b> {profile.aboutMe}
      </div>
      <div>
        <b>Contacts: </b>
        {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />
        })}
      </div>
    </div>
  )
}

type ContactPropsType = {
  contactTitle: string
  contactValue: string
}

const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
  return (
    <div>
      <b>{contactTitle}: </b>
      {contactValue}
    </div>
  )
}

export default ProfileInfo;
