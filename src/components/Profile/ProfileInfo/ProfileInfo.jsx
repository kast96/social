import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  } else {
    return (
      <div className="profile-info">
        <div className="profile__avatar">
          <img src={(props.profile.photos.large != null) ? props.profile.photos.large : userPhoto} alt=""/>
        </div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        <div className="profile__description">description</div>
      </div>
    );
  }
}

export default ProfileInfo;
