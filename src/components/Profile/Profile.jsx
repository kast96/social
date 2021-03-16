import Posts from './Posts/Posts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = () => {
  return (
    <div className="profile">
      <ProfileInfo />
      <Posts />
    </div>
  );
}

export default Profile;
