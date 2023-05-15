import React,{ useRef } from "react"
import { NavigationContext } from "./context"
import { createBrowserHistory } from 'history'
// function BrowserRouter ({children}) {
//来 这个function 主要是为了给routes传递history对象对吧，然后把children传给routes交给它处理vdom到dom节点 
function BrowserRouter ({children}) {  // 这里params 只有children一个对象和prototype ，所以直接结构
    const history = useRef()
    history.current =  createBrowserHistory()
    
    return <Router children={children} history = {history}></Router >

}
function Router ({children ,  history}) {
    return (
        <NavigationContext.Provider value={history}>
            {children}
        </NavigationContext.Provider>
    )

}
 
export default BrowserRouter