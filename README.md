# 1.section1  react-reouter-dom 
首先 要明白是由js 原声的hash 或者 history 封装的 所以得先看这俩个api

## history 和hash 知识点
history路由是拼接到真实的url后面的, 而hash是用#分开路由的，当使用hash的时候
server端不感知hash路由的切换，而history重新刷新页面的时候，就会根据当前的url
请求server的资源，所以需要服务端进行配置，否则就是404 ，请求不到资源

browerrouter主要是用了**HTML5 history API** pushState， ReplaceState 和 PopState事件，让页面的ui同步与url

## 总结一下元素 
其实就是包裹所有的BowerRouter 和 HashRouter  Routes 包裹着 Route  Route就是被渲染dom的路由，可以有
一级路由 二级路由， 就是Route可以包裹路由，走到一级路由，默认展示的二级路由中的index页面，没有index 只进到一级就不展示二级
配置path 要么直接配路由名称，组件自己会根据父级路由 凭借路由地址 要么配置绝对路由 一级一级配

<Outlet/>  设置父级路由中展示子级路由位置 

## 动态路由
动态路由就是: + 加一个变量的形式配置route  
可以用useParams取到当前的变量 
for example
配置 ：id    ------->  用 useParams().id取到url后面的动态路由

## 动态跳转 useNavigate().to('path')

## <Navigate>
有replace属性

## 404
用* 配置path
## 问题 
所以为什么大一点的项目需要用browerrouter 有什么好处？
Link 和 NavLink 的区别是什么？

# 2.section 2  my Router
 主要实现路由渲染 BroswerRouter通过context 传递共享history给所有的子路由 
 使用BrowserRouter 可以拿到他的children Routes 和 Routes所有的数组children Route
 在Routes中便利数组children，通过pathname 匹配路径 条件渲染

children的props.element可以直接渲染成dom 因为element就是import的组件通过props传递过来的  没毛病
 ## map 和forEach的区别
 map 有返回值 根据条件return出来新的数组 但是forEach不会

## 3.section 3 Navigation
实现Link 组件和 useNavigat hook
创建了router函数组件 接受了上级BrowserRouter 或者hash Router 用context传递过来的history 对象，其实本质就是从history里面选择哪个创建方式 createHashHistory  或者 createBowserHistory 亦或者memoryhistory ， 这样就可以用不同的路由模式

这里注意  因为都是函数组件，所以每次重新加载的时候 ，都会重新调用函数，为了能保存新创建的history对象，或者navigatorContext 
分别使用了useRef 和 useMemo 来保存


问题1:  为什么用了 useRef之后函数组件重新重新执行，值也不会丢（因为存在react 链表里了？）
问题2： 为什么有时候用useMemo 有时候用useRef ？了解他们的本质 使用方式等等

## 4. section 4 实现路由渲染
 问题1: useEffect 和 useLayoutEffect的区别
 回答，最大的区别就是callback 函数的执行时间不一样  useEffect 是dom变更之后 延迟执行？
 layout 是dom变更之后 立即执行  所以具体不同体现在哪里？
 再回答 ： 因为  为了locaiton 改变之后dom页面重新渲染 所以选择使用了setState 来更新页面， 我们使用了
 history里面的listen函数 ，所以我们要在dom变更后立即执行

