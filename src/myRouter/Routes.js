import React from "react"
import { useRoutes } from "./hook"
import createRoutesFromChildren from './createRoutesFromChildren'
function Routes({ children }) {
   const routes = createRoutesFromChildren(children)
    const elements = useRoutes(routes)
    return elements
}

export default Routes