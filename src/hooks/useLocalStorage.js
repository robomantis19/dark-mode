import {useState} from 'react'; 



export const useLocalStorage = (key, initValue) => { 
    const [storedDark, setStoredDark] = useState(() => { 
        const DarkItem = window.localStorage.getItem(key);
        return DarkItem ? JSON.parse(DarkItem) : initValue;
    });
    
    
    const SetValue = value => { 
        setStoredDark(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedDark, SetValue]; 
}