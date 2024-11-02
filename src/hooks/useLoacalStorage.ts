import { useEffect, useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
    // Function to get the value from local storage or use the initial value
    const getStoredValue = (): T => {
        if (typeof window === 'undefined') {
            // Return initial value if window is undefined (e.g., during SSR)
            return initialValue;
        }
        const storedValue = window.localStorage.getItem(key);
        if (storedValue) {
            // Try to parse the stored JSON value
            try {
                return JSON.parse(storedValue);
            } catch {
                return (storedValue as T); // Return as string if parsing fails
            }
        }
        return initialValue; // Return initial value if no value found
    };

    const [storedValue, setStoredValue] = useState<T>(getStoredValue);

    const setValue = (value: T | ((val: T) => T)) => {
        const valueToStore = value instanceof Function ? value(storedValue) : value;

        // Save to local storage
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }

        // Update state
        setStoredValue(valueToStore);
    };

    const removeValue = () => {
        if (typeof window !== 'undefined') {
            window.localStorage.removeItem(key);
        }
        setStoredValue(initialValue);
    };

    useEffect(() => {
        setStoredValue(getStoredValue());
    }, [key]);

    return [storedValue, setValue, removeValue] as const;
}

export default useLocalStorage;
