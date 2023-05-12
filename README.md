# react-reouter-dom 
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
