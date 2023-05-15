import React from "react"
import { useRoutes } from "./hook"
function Routes ({children}) {
    const routes = []
    // 类比dom->vdom
    React.Children.forEach(children,child => {
        routes.push({
            path:child.props.path,
            element:child.props.element
        })
    })
   const elements = useRoutes(routes)
   return (<>
    {elements}
   </>)
}
 
export default Routes