function useRoutes(routes){
    const pathname = window.location.pathname;

    const rs = routes.map((route) => {
        const match = pathname === route.path || pathname ==='/' + route.path
        let element = match ? route.element : null
        return element
    })
    return rs
}

export default useRoutes