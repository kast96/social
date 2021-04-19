import PostsContainer from './Posts/PostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
  return (
    <div className="profile">
      <ProfileInfo profile={props.profile} />
      <PostsContainer />
    </div>
  );
}

export default Profile;
