import React, { useContext } from "react";
import { NavigationContext } from "./Context";
export function useRoutes(routes){
    const pathname = window.location.pathname;

    const rs = routes.map((route) => {
        const match = pathname === route.path || pathname ==='/' + route.path  //这里+ 优先级比===高 所以先执行家好 然后再对比值ß
        let element = match ? route.element : null
        return element
    })
    return rs
}

// 其实就是history 的createBrowserHistory方法返回的history对象中的push方法
export function useNavigate() {
    console.log('NavigationContext',NavigationContext)
    
    const  naviagtor =  useContext(NavigationContext)?.naviagtor
    return naviagtor?.push;
    
}
 