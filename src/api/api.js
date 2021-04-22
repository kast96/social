import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4ce4c13d-3edb-4132-88d7-829e1edef69e'
    }
});

export const usersAPI = {
    getUsers(currnetPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currnetPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    }
}