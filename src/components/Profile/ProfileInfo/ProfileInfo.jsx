import Preloader from "../../common/Preloader/Preloader";
import UserPhoto from "../../common/UserPhoto/UserPhoto.jsx";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, isOwner, updateStatus, savePhoto}) => {
  if (!profile) {
    return <Preloader />
  }

  const inMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <div className="profile-info">
      <div className="profile__avatar">
        <UserPhoto photo={profile.photos.large} />
        {isOwner && <input type={'file'} onChange={inMainPhotoSelected} />}
      </div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <div className="profile__description">description</div>
    </div>
  );
}

export default ProfileInfo;
