import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({children}){

    //State for storing the current path
    const[currentPath, setCurrentPath] = useState(window.location.pathname);

    //Use effect for handling the back and forward routes
    useEffect(()=>{
        const handler = () =>{
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate', handler);

        return ()=>{
            window.removeEventListener('popstate', handler);
        }
    },[]);

    //Navigate to
    const navigateTo = (to) =>{
    window.history.pushState({}, '', to);
    setCurrentPath(to);
    }

    return(
        <NavigationContext.Provider value={{currentPath, navigateTo}}>
            {children}
        </NavigationContext.Provider>
    )
}

export {NavigationProvider}
export default NavigationContext;
