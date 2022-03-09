import Pagenator from '../common/Pagenator/Pagenator';
import User from "./User";
import {UserType} from "../../types/types";
import UsersSearchForm from './UsersSearchForm';
import { FilterType } from '../../redux/users-reducer';

type PropsType = {
	currentPage: number
	totalUsersCount: number
	pageSize: number
	onPageChanged: (pageNubmer: number) => void
	onFilterChanged: (filter: FilterType) => void
	users: Array<UserType>
	followingInProgress: Array<number>
	follow: (userId: number) => void
	unfollow: (userId: number) => void
}


let Users: React.FC<PropsType> = ({currentPage, totalUsersCount, pageSize, onPageChanged, onFilterChanged, users, followingInProgress, follow, unfollow}) => {
	return (
		<div className="users">
			<UsersSearchForm onFilterChanged={onFilterChanged} />
			{
				users.map(user => 
					<User key={user.id} user={user} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow} />
				)
			}
			<Pagenator currentPage={currentPage} totalCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged} />
		</div>
	)
}

export default Users;
