import React from "react"
import { NavigatorContext, RouterContext } from "./context"
import { normalizePathname } from './utils'
import Outlet from './OutLet'
const useRoutes = (children) => {
    const pathName = window.location.pathname
    return children.map(route => {
        // if (pathName.startsWith(child.path)) {
        //     return child.element
        // }
        const match = pathName.startsWith(route.path)
        return (
            match && route.children.map((child) => {
                let m = normalizePathname(child.path) == pathName
                debugger
                return (
                    m && (
                        <RouterContext.Provider value = {{ outLet:child.element }} children= {
                            route.element !== undefined ? route.element : <Outlet />
                        }>
                        </RouterContext.Provider>
                    )
                )
            })
        )


        // return match && (child.children.map((child)=>{
        //     let m = normalizePathname(child.path)
        // }))
    })

}

const useNavigate = () => {
    const { navigator } = React.useContext(NavigatorContext)
    console.log('navigator', navigator)

    return navigator.push
}

function useOutlet() {
    const { outlet } = React.useContext(RouterContext);
    return outlet;
  }
export { useRoutes, useNavigate, useOutlet }