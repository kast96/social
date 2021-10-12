import Preloader from "../../common/Preloader/Preloader";
import UserPhoto from "../../common/UserPhoto/UserPhoto.jsx";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  } else {
    return (
      <div className="profile-info">
        <div className="profile__avatar">
          <UserPhoto photo={profile.photos.large} />
        </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div className="profile__description">description</div>
      </div>
    );
  }
}

export default ProfileInfo;
