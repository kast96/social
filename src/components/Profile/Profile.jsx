import Posts from './Posts/Posts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
  return (
    <div className="profile">
      <ProfileInfo />
      <Posts posts={props.posts} />
    </div>
  );
}

export default Profile;
