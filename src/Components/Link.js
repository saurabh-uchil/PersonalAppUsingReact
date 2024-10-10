import { useContext } from "react";
import NavigationContext from "../Context/NavigationContext";

function Link({to,children}){
    const {navigateTo} = useContext(NavigationContext);
    
    const handleClick = () =>{
        //console.log("Clicked on Link");
        navigateTo(to);
    }
    return(
        <>
        <a href={to} onClick={handleClick}>{children}</a>
        </>
    )
}

export default Link;