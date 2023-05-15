import { useNavigate } from './hook'

function Link({ to, children }) {
    const naviagtor = useNavigate()
    const handle = (e) =>{
        console.log(e)
        e.preventDefault()
        naviagtor(to)
    }
    return <>
        <a href={to} onClick={handle}>{children}</a>
    </>
}

export default Link