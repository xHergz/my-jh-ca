export type LocalStorageValue = string | null;

export function getItem(key: string): LocalStorageValue {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export function setItem(key: string, value: LocalStorageValue): void {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
}

export function removeItem(key: string): void {
    try {
        window.localStorage.removeItem(key);
    } catch (error) {
        console.log(error);
    }
}
