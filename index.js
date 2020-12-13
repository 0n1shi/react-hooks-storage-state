'use strict';

import React from 'react';

function useStorageState(key, defaultValue, storage) {
    const [value, setValue] = React.useState(() => {
        const stickyValue = storage.getItem(key);
        return stickyValue !== null
            ? JSON.parse(stickyValue)
            : defaultValue;
    });
    React.useEffect(() => {
        storage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
}

export function useLocalStorageState(key, defaultValue = '') {
    return useStorageState(key, defaultValue, window.localStorage);
}

export function useSessionStorageState(key, defaultValue = '') {
    return useStorageState(key, defaultValue, window.sessionStorage);
}
