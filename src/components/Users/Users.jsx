import Pagenator from '../common/Pagenator/Pagenator';
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, followingInProgress, follow, unfollow, ...props}) => {
	return (
		<div className="users">
			<Pagenator currentPage={currentPage} totalCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged} />
			{
				props.users.map(user => 
					<User key={user.id} user={user} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow} />
				)
			}
		</div>
	)
}

export default Users;
