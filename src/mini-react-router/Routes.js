import { createRoutesFromChildren } from "./createRoutesFromChildren";

import { useRoutes } from './hook'

export default function Routes (parmas){
    
    //同理  这理的children 就是Routes函数组件里面包含的Route子组件
    const children = parmas.children
    debugger

    const routes = createRoutesFromChildren(children)  // 这里就是把child 便利成有path 和 element 属性的对象数组集合
    debugger
    //uee route 就是根据当前url 的pathname 便利展示对应path的当前页面
    return useRoutes(routes)
}