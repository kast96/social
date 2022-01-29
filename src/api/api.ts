import axios from "axios";
import { ProfileType } from "../types/types";

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
    follow(userId: number) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`);
    },
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status});
    },
    savePhoto(file: any) {
        let formData = new FormData();
        formData.append('image', file);
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile);
    }
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

type MeResposeType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type LoginResposeType = {
    data: {
        userId: number
    }
    resultCode: ResultCodeEnum | ResultCodeForCaptchaEnum
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<MeResposeType>(`auth/me`).then(response => response.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginResposeType>(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}