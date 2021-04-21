import userPhoto from "../../assets/images/user.png";
import {NavLink} from 'react-router-dom';
import axios from 'axios';

let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let onClickUnfollow = (userId) => {
		props.toggleFollowingProgress(true, userId);
		axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
			withCredentials: true,
			headers: {
				'API-KEY': '4ce4c13d-3edb-4132-88d7-829e1edef69e'
			}
		}).then(response => {
			if(response.data.resultCode === 0) {
				props.unfollow(userId);
			}
			props.toggleFollowingProgress(false, userId);
		});
	}

	let onClickFollow = (userId) => {
		props.toggleFollowingProgress(true, userId);
		axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
			withCredentials: true,
			headers: {
				'API-KEY': '4ce4c13d-3edb-4132-88d7-829e1edef69e'
			}
		}).then(response => {
			if(response.data.resultCode === 0) {
				props.follow(userId);
			}
			props.toggleFollowingProgress(false, userId);
		});
	}
	
	return (
		<div className="users">
			{
				pages.map(page => 
					<span key={page} className={props.currentPage === page ? 'is-active' : ''} onClick={(e) => {props.onPageChanged(page)}}>{page}</span>
				)
			}
			{
				props.users.map(user => 
					<div className="user" key={user.id}>
						<div className="user__left">
							<div className="user__img">
								<NavLink to={'/profile/'+user.id+'/'}>
									<img src={(user.photos.small != null) ? user.photos.small : userPhoto} alt={user.name}/>
								</NavLink>
							</div>
							<div className="user__subscribe">
								{
									(user.followed) 
										? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {onClickUnfollow(user.id)}}>Unfollow</button>
										: <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {onClickFollow(user.id)}}>Follow</button>
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
		</div>
	)
}

export default Users;
