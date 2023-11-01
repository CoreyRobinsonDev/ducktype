import {useState, useEffect} from "react";

export default function useLocalStorage(key: string, defaultValue: Object | string | null = null) {
    const [value, setValue] = useState(() => {
        try {
            const saved = window.localStorage.getItem(key);
            if (saved !== null) return JSON.parse(saved);

            return defaultValue;
        } catch {
            return defaultValue;
        }
    })

    useEffect(() => {
        const rawValue = JSON.stringify(value);
        window.localStorage.setItem(key, rawValue);
    }, [value])

    return [value, setValue];
}
