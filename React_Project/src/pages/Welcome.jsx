import { Link } from "react-router-dom"

const Welcome = ({name}) => {
    return (
        <>
            <h2 className="welcome">Welcome, {name}!</h2>
            <Link to="/counter">Counter</Link> |  <Link to="users/bluebojack">Profilo Github</Link>
        </>
    )
} 

export default Welcome;