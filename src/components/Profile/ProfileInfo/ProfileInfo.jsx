import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  } else {
    return (
      <div className="profile-info">
        <div className="profile__avatar">
          <img src={(props.profile.photos.large != null) ? props.profile.photos.large : userPhoto} alt=""/>
        </div>
        <div className="profile__description">description</div>
      </div>
    );
  }
}

export default ProfileInfo;
