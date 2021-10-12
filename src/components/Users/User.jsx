import UserPhoto from "../common/UserPhoto/UserPhoto.jsx";
import {NavLink} from 'react-router-dom';

let User = ({user, followingInProgress, follow, unfollow}) => {
	return (
		<div className="user" key={user.id}>
			<div className="user__left">
				<div className="user__img">
					<NavLink to={'/profile/' + user.id + '/'}>
						<UserPhoto photo={user.photos.small} alt={user.name} />
					</NavLink>
				</div>
				<div className="user__subscribe">
					{
						(user.followed)
							? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { unfollow(user.id) }}>Unfollow</button>
							: <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { follow(user.id) }}>Follow</button>
					}
				</div>
			</div>
			<div className="user__right">
				<div className="user__name">{user.name}</div>
				<div className="user__status">{user.status}</div>
				{/*<div className="user__location">{user.location.city}, {user.location.country}</div>*/}
			</div>
		</div>
	)
}

export default User;
