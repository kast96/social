const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        /*{id: 1, fullname: 'Евгений', photo: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', status: 'Find the argus apocraphex', location: {city: 'Penaz', country: 'Russia'}, followed: true},
        {id: 2, fullname: 'Вова', photo: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', status: 'React here', location: {city: 'Minsk', country: 'Belarus'}, followed: false},
        {id: 3, fullname: 'Дима', photo: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', status: 'Redux?', location: {city: 'Kiev', country: 'Ukraine'}, followed: true},*/
    ]
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
            return {...state, users: [...state.users, ...action.users]}

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

export default usersReducer;