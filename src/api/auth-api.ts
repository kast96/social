import { instance, ResultCodeEnum, ResultCodeForCaptchaEnum, APIResponseType } from './api'

type MeResposeDataType = {
    id: number
    email: string
    login: string
}

type LoginResposeDataType = {
    userId: number
}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResposeDataType>>(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResposeDataType, ResultCodeEnum | ResultCodeForCaptchaEnum>>(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}