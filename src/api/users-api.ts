import { GetiItemsType, instance, APIResponseType } from './api'

export const usersAPI = {
    getUsers(currnetPage = 1, pageSize = 10, term = "", friend: null | boolean = null) {
        return instance.get<GetiItemsType>(`users?page=${currnetPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`)).then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`).then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(response => response.data) as Promise<APIResponseType>
    },
}