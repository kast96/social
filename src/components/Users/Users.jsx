import userPhoto from "../../assets/images/user.png";
import {NavLink} from 'react-router-dom';

let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
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
								{(user.followed) ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
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
