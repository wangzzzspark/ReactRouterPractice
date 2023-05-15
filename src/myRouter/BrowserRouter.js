import React,{ useRef, useMemo } from "react"
import { createBrowserHistory } from 'history'
import { NavigatorContext } from './context'
// function BrowserRouter ({children}) {
//来 这个function 主要是为了给routes传递history对象对吧，然后把children传给routes交给它处理vdom到dom节点 
function BrowserRouter ({children}) {  // 这里params 只有children一个对象和prototype ，所以直接结构
    const historyRef = useRef() // 这里防止页面刷新后 createBrowserHistory（） 对象直接重新生成了 所以用了useRef 这样值就不会丢了
    if(historyRef.current == null){
        historyRef.current =  createBrowserHistory()
    }
    const history = historyRef.current
    return <Router children={children} navigator = {history}></Router >

}
function Router ({children ,  navigator}) {
    const navigatorContext = useMemo(()=> ({navigator}),[navigator])
    return (
        <NavigatorContext.Provider value={navigatorContext}>
            {children}
        </NavigatorContext.Provider>
    )

}
 
export default BrowserRouter