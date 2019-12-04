import { useLocalStorage } from './useLocalStorage'; 
import { useEffect } from 'react'; 

export const useDarkMode = initValue => { 

    const [darkvalues, setDarkValues] = useLocalStorage('Dark', initValue);
    useEffect(() => {
        // const darkElement = document.getElementsByClassName('dark-mode');
        // const body = document.getElementsByTagName('body');
        if(darkvalues == true){ 
            
            document.body.classList.add('dark-mode');
        }else{
            document.body.classList.remove('dark-mode')
        }

    },[darkvalues])
    return [darkvalues, setDarkValues]

}