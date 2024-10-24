import { defineStore } from 'pinia';

export const useApiStore = defineStore('apiStore', {
    state: () => ({
        apiInfo: null as any,
    }),
    actions: {
        setApiInfo(info: any) {
            this.apiInfo = info;
        },
    },
});
