import { ProfileType } from '../../types/types';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type PropsType = {
  profile: ProfileType | null
  status: string
  isOwner: boolean
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: React.FC<PropsType> = ({profile, status, isOwner, updateStatus, savePhoto, saveProfile}) => {
  return (
    <div className="profile">
      <ProfileInfo profile={profile} status={status} isOwner={isOwner} updateStatus={updateStatus} savePhoto={savePhoto} saveProfile={saveProfile} />
      <PostsContainer />
    </div>
  );
}

export default Profile;
