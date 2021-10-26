import PostsContainer from './Posts/PostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
  return (
    <div className="profile">
      <ProfileInfo profile={props.profile} status={props.status} isOwner={props.isOwner} updateStatus={props.updateStatus} savePhoto={props.savePhoto} saveProfile={props.saveProfile} />
      <PostsContainer />
    </div>
  );
}

export default Profile;
