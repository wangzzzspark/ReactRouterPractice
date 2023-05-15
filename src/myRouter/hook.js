import React from "react"
import { NavigatorContext } from "./context"
const useRoutes = (children) => {
    const pathName = window.location.pathname
   return  children.map(child => {
        if(pathName==child.path  || pathName=='/' + child.path ){
             return child.element
        }
    })

}

const useNavigate = () => {
   const  { navigator }   =React.useContext(NavigatorContext) 
   console.log('navigator',navigator)
 
    return navigator.push
}
export { useRoutes, useNavigate }