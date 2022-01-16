import Pagenator from '../common/Pagenator/Pagenator';
import User from "./User";
import {UserType} from "../../types/types";

type PropsType = {
	currentPage: number
	totalUsersCount: number
	pageSize: number
	onPageChanged: (pageNubmer: number) => void
	users: Array<UserType>
	followingInProgress: Array<number>
	follow: (userId: number) => void
	unfollow: (userId: number) => void
}


let Users: React.FC<PropsType> = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, followingInProgress, follow, unfollow}) => {
	return (
		<div className="users">
			<Pagenator currentPage={currentPage} totalCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged} />
			{
				users.map(user => 
					<User key={user.id} user={user} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow} />
				)
			}
		</div>
	)
}

export default Users;
