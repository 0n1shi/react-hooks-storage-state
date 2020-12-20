export function useLocalStorageState<T>(key: string, defaultValue: T): [T, React.Dispatch<T>];
export function useSessionStorageState<T>(key: string, defaultValue: T): [T, React.Dispatch<T>];
