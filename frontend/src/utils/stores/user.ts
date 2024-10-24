import authClient from '@/api';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('userStore', () => {
    interface IUserInfo {
        username?: string
        password?: string
    }

    const userInfo = ref<IUserInfo>({
        username: '',
        password: '',
    });

    const setUserInfo = (data: IUserInfo) => {
        userInfo.value = data
    }

    const login = async (form: IUserInfo) => {
        return await authClient.login(form)
    };

    const logout = async () => {
        return await authClient.logout()
    }

    return {
        userInfo,
        login,
        logout,
        setUserInfo,
    };
});
