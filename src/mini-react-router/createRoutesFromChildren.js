import React from "react";

export const createRoutesFromChildren = (children) =>{
    //这里的children 属性就是Route函数组件中在使用此函数的时候 传入的Route子元素
    const routes = []

    //children 是Route路由数组集合  child 是每一个路由
    React.Children.forEach(children,(child) => {
     
        const route = {
            element: child.props.element,
            path:child.props.path
        }

        routes.push(route)
    })

    console.log('routes',routes)
    debugger
    //这里其实就是便利routes中的route元素  吧它便历程route对象数组
    return routes
}

  