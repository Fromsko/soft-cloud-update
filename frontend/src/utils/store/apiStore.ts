// store/apiStore.ts
import { defineStore } from 'pinia';

export const useApiStore = defineStore('apiStore', {
    state: () => ({
        apiInfo: null as any, // 初始状态
    }),
    actions: {
        setApiInfo(info: any) {
            this.apiInfo = info;
        },
    },
});
