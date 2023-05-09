import React, { useMemo } from "react";
import { NavigationContext } from "./Context";
export default function Router({ children, navigator }) {
    //这里为什么要用useMemo
    let navigationContext = useMemo(() => ( {navigator} ), [navigator])
    console.log(navigationContext)
    debugger
    return (<>
        <NavigationContext.Provider value={123123213}>
            {children}
        </NavigationContext.Provider>
    </>)
}