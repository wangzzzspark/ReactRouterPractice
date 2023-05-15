const useRoutes = (children) => {
    const pathName = window.location.pathname
   return  children.map(child => {
        if(pathName==child.path  || pathName=='/' + child.path ){
             return child.element
        }
    })

}

export { useRoutes }