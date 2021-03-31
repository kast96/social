import PostsContainer from './Posts/PostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = () => {
  return (
    <div className="profile">
      <ProfileInfo />
      <PostsContainer />
    </div>
  );
}

export default Profile;
