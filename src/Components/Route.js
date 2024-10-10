import { useContext } from "react";
import NavigationContext from "../Context/NavigationContext";

function Route({to,children}){
    const {currentPath} = useContext(NavigationContext);

    if(to == currentPath){
        return children;
    }
}

export default Route;