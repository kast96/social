import Pagenator from '../common/Pagenator/Pagenator'
import User from "./User"
import UsersSearchForm from './UsersSearchForm'
import { actions, FilterType, getUsers } from '../../redux/users-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { getStateCurrentPage, getStateFilter, getStateFollowingInProgress, getStatePageSize, getStateTotalUsersCount, getStateUsers } from '../../redux/users-selectors'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import * as quertyString from 'querystring'

type QueryParamsType = {term?: string, page?: string, friend?: string}

export const Users: React.FC = React.memo(() => {
	const totalUsersCount = useSelector(getStateTotalUsersCount)
	const currentPage = useSelector(getStateCurrentPage)
	const pageSize = useSelector(getStatePageSize)
	const users = useSelector(getStateUsers)
	const followingInProgress = useSelector(getStateFollowingInProgress)
	const filter = useSelector(getStateFilter)

	const dispatch = useDispatch()
	const history = useHistory()

	useEffect(() => {
		const search = history.location.search.substring(1)
		const parsed = quertyString.parse(search) as QueryParamsType
		
		let actualPage = currentPage
		let actualFilter = filter

		if (!!parsed.page) actualPage = Number(parsed.page)
		if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}
		switch (parsed.friend) {
			case 'null':
				actualFilter = {...actualFilter, friend: null}
				break

			case 'true':
				actualFilter = {...actualFilter, friend: true}
				break

			case 'false':
				actualFilter = {...actualFilter, friend: false}
				break
		}

    	dispatch(getUsers(actualPage, pageSize, actualFilter))
	}, [currentPage, pageSize, dispatch, filter, history.location.search])

	useEffect(() => {
		const query: QueryParamsType = {}
		if (!!filter.term) query.term = filter.term
		if (filter.friend !== null) query.friend = String(filter.friend)
		if (currentPage !== 1) query.page = String(currentPage)


		history.push({
			pathname: '/users/',
			search: quertyString.stringify(query)
		})
	}, [history, filter, currentPage])

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
})