import Pagenator from '../common/Pagenator/Pagenator';
import User from "./User";
import UsersSearchForm from './UsersSearchForm';
import { actions, FilterType, getUsers } from '../../redux/users-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getStateCurrentPage, getStateFilter, getStateFollowingInProgress, getStatePageSize, getStateTotalUsersCount, getStateUsers } from '../../redux/users-selectors';
import { useEffect } from 'react';

export const Users: React.FC = () => {
	const totalUsersCount = useSelector(getStateTotalUsersCount)
	const currentPage = useSelector(getStateCurrentPage)
	const pageSize = useSelector(getStatePageSize)
	const users = useSelector(getStateUsers)
	const followingInProgress = useSelector(getStateFollowingInProgress)
	const filter = useSelector(getStateFilter)

	const dispatch = useDispatch()

	useEffect(() => {
    	dispatch(getUsers(currentPage, pageSize, filter));
	}, [dispatch, currentPage, pageSize, filter])

	const onPageChanged = (pageNubmer: number) => {
		dispatch(getUsers(pageNubmer, pageSize, filter))
		dispatch(actions.setCurrentPage(pageNubmer))
	}
	const onFilterChanged = (filter: FilterType) => {
		dispatch(getUsers(1, pageSize, filter))
	}
	const follow = (userId: number) => {
		dispatch(follow(userId))
	}
	const unfollow = (userId: number) => {
		dispatch(unfollow(userId))
	}

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