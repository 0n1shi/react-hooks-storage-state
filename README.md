# React hooks storage state

![](https://img.shields.io/badge/version-v1.4.2-green) ![](https://img.shields.io/badge/license-MIT-blue)

Library with web storage for state management with interface like React-hooks.

## Install

```bash
$ npm install react-hooks-storage-state
```

## Functions

```ts
export function useLocalStorageState<T>(key: string, defaultValue: T): [T, React.Dispatch<T>];
export function useSessionStorageState<T>(key: string, defaultValue: T): [T, React.Dispatch<T>];
```

## Example

```tsx
import React from 'react';
import logo from './logo.svg';
import { useSessionStorageState } from 'react-hooks-storage-state';

function App() {
  const [msg, setMsg] = useSessionStorageState('msg', '');
  return (
    <div>
      <input type="text" value={msg} onChange={e => setMsg(e.target.value)} />
    </div>
  );
}

export default App;
```
