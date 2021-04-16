const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRNET_PAGE = 'SET-CURRNET-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user;
                }),
            };
    
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user;
                }),
            };

        case SET_USERS:
            return {...state, users: action.users}

        case SET_CURRNET_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state;
    }
}

export const followAC = (userId) => {
	return {type: FOLLOW, userId}
}

export const unfollowAC = (userId) => {
	return {type: UNFOLLOW, userId}
}

export const setUsersAC = (users) => {
	return {type: SET_USERS, users}
}

export const setCurrentPageAC = (currentPage) => {
	return {type: SET_CURRNET_PAGE, currentPage}
}

export const setTotalUsersCountAC = (totalCount) => {
	return {type: SET_TOTAL_USERS_COUNT, totalCount}
}

export const toggleIsFetchingAC = (isFetching) => {
	return {type: TOGGLE_IS_FETCHING, isFetching}
}

export default usersReducer;