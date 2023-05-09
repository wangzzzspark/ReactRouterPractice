import React, { useRef } from "react";
import Router from "./Router";
import { createBrowserHistory } from "history";
export const BrowserRouter = ({ children }) => {

    // 用useRef 保存createBrowserHistory的值 这样页面刷新数据就不会重新init赋值
    let historyRef = useRef()
    //ref对象只有一个current属性
    if (historyRef.current?.createBrowserHistory == null) {
        historyRef.current = createBrowserHistory()
    }
    const history = historyRef.current
    return <Router  children={children}  navigator={history} />
}

