import { useNavigate } from './hook'

export default function Link ({to, children}) {
    console.log('to',to)
    console.log('children',children)

    const navigate = useNavigate()
    console.log('navigate------',navigate)
    debugger
    const handle = (e) => {
        navigate(to)
    }
    return (
        <a href={to} onClick={handle}>
            {children}
        </a>
    )
}