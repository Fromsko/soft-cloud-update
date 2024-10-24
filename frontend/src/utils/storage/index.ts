import config from "@/utils/config"

export const useStorage = () => ({
    setItem(key: any, val: any) {
        let storage = this.getStorage()
        storage[key] = val
        window.localStorage.setItem(
            config.NAME_SPACE,
            JSON.stringify(storage)
        )
    },
    getItem(key: any): Object {
        return this.getStorage()[key] ?? {}
    },
    getStorage() {
        return JSON.parse(
            window.localStorage.getItem(
                config.NAME_SPACE
            ) || "{}"
        )
    },
    clearItem(key: any) {
        let storage = this.getStorage()
        delete storage[key]
        window.localStorage.setItem(
            config.NAME_SPACE,
            JSON.stringify(storage)
        )
    },
    clearAll() {
        window.localStorage.clear()
    }
})