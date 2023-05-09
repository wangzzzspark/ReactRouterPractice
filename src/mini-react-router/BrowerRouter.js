export const BrowserRouter = (parmas) => {

    const children = parmas.children
    //## question: 这里看看下parmas整体参数是啥?
    // answer: params是一个对象，里面只有一个children属性
    // 也就是说 函数组件中的Parmas里面参数就是它的子元素   clear
    return children 
}

 